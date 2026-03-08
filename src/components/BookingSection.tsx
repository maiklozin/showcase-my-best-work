import { useState, useMemo } from "react";
import { format, isSameDay } from "date-fns";
import { CalendarIcon, Clock, Instagram, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/I18nProvider";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const INSTAGRAM_USERNAME = "dara__es_";

const HOURS = Array.from({ length: 13 }, (_, i) => {
  const h = i + 8; // 08:00 – 20:00
  return `${h.toString().padStart(2, "0")}:00`;
});

const BookingSection = () => {
  const { t } = useI18n();
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();
  const [timeFrom, setTimeFrom] = useState<string>("");
  const [timeTo, setTimeTo] = useState<string>("");
  const [contact, setContact] = useState("");

  const sameDay = dateFrom && dateTo && isSameDay(dateFrom, dateTo);

  // When same day, require times; otherwise just dates + contact
  const isValid = useMemo(() => {
    if (!dateFrom || !dateTo || !contact.trim()) return false;
    if (sameDay && (!timeFrom || !timeTo)) return false;
    return true;
  }, [dateFrom, dateTo, contact, sameDay, timeFrom, timeTo]);

  // Filter "to" hours so they're after "from"
  const availableToHours = useMemo(() => {
    if (!timeFrom) return HOURS;
    return HOURS.filter((h) => h > timeFrom);
  }, [timeFrom]);

  // Auto-select dateTo = dateFrom when dateFrom changes
  const handleFromSelect = (date: Date | undefined) => {
    setDateFrom(date);
    if (date && (!dateTo || dateTo < date)) {
      setDateTo(date);
    }
    // Reset times when date changes
    setTimeFrom("");
    setTimeTo("");
  };

  const handleToSelect = (date: Date | undefined) => {
    setDateTo(date);
    setTimeFrom("");
    setTimeTo("");
  };

  const handleRequest = () => {
    if (!isValid || !dateFrom || !dateTo) return;

    const fromStr = format(dateFrom, "dd.MM.yyyy");
    const toStr = format(dateTo, "dd.MM.yyyy");

    let message: string;
    if (sameDay) {
      message = `Hi! I'd like to request: ${fromStr}, ${timeFrom} – ${timeTo}. My contact: ${contact.trim()}`;
    } else {
      message = `Hi! I'd like to request dates: ${fromStr} – ${toStr}. My contact: ${contact.trim()}`;
    }

    window.open(
      `https://ig.me/m/${INSTAGRAM_USERNAME}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="booking" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-lg text-center">
        <p className="mb-3 font-body text-xs uppercase tracking-[0.4em] text-primary">
          {t("bookingLabel")}
        </p>
        <h2 className="mb-4 font-display text-4xl font-medium italic text-foreground md:text-5xl">
          {t("bookingTitle")}
        </h2>
        <p className="mx-auto mb-10 max-w-md font-body text-sm font-light leading-relaxed text-muted-foreground">
          {t("bookingDescription")}
        </p>

        {/* Date pickers */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:gap-6">
          {/* From */}
          <div className="flex-1">
            <label className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t("bookingDateFrom")}
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-body font-normal",
                    !dateFrom && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateFrom ? format(dateFrom, "dd.MM.yyyy") : "—"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dateFrom}
                  onSelect={handleFromSelect}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* To */}
          <div className="flex-1">
            <label className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t("bookingDateTo")}
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-body font-normal",
                    !dateTo && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateTo ? format(dateTo, "dd.MM.yyyy") : "—"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dateTo}
                  onSelect={handleToSelect}
                  disabled={(date) =>
                    date < new Date() || (dateFrom ? date < dateFrom : false)
                  }
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Time pickers — only when same day */}
        {sameDay && (
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex-1">
              <label className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <Clock className="mr-1 inline h-3 w-3" />
                {t("bookingTimeFrom")}
              </label>
              <Select value={timeFrom} onValueChange={(v) => { setTimeFrom(v); if (timeTo && v >= timeTo) setTimeTo(""); }}>
                <SelectTrigger className="w-full font-body">
                  <SelectValue placeholder="—" />
                </SelectTrigger>
                <SelectContent>
                  {HOURS.map((h) => (
                    <SelectItem key={h} value={h}>{h}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <Clock className="mr-1 inline h-3 w-3" />
                {t("bookingTimeTo")}
              </label>
              <Select value={timeTo} onValueChange={setTimeTo} disabled={!timeFrom}>
                <SelectTrigger className="w-full font-body">
                  <SelectValue placeholder="—" />
                </SelectTrigger>
                <SelectContent>
                  {availableToHours.map((h) => (
                    <SelectItem key={h} value={h}>{h}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Contact input */}
        <div className="mb-6">
          <label className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t("bookingContact")}
          </label>
          <Input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder={t("bookingContactPlaceholder")}
            maxLength={100}
            className="font-body"
          />
        </div>

        {/* Follow reminder */}
        <p className="mb-8 flex items-center justify-center gap-2 font-body text-xs text-muted-foreground">
          <Instagram size={14} />
          {t("bookingFollowReminder")}
        </p>

        {/* Submit */}
        <Button
          onClick={handleRequest}
          disabled={!isValid}
          className="inline-flex items-center gap-3 border border-primary bg-transparent px-8 py-3.5 font-body text-xs uppercase tracking-[0.3em] text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground disabled:opacity-40"
          variant="outline"
        >
          <Send size={14} />
          {isValid ? t("bookingRequestDates") : t("bookingSelectDates")}
        </Button>
      </div>
    </section>
  );
};

export default BookingSection;
