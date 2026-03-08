import { useState, useMemo } from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock, Instagram, Send, Copy, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/I18nProvider";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  const h = i + 8;
  return `${h.toString().padStart(2, "0")}:00`;
});

const BookingSection = () => {
  const { t } = useI18n();
  const { toast } = useToast();
  const [calFromOpen, setCalFromOpen] = useState(false);
  const [calToOpen, setCalToOpen] = useState(false);
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const [timeFromEnd, setTimeFromEnd] = useState("");
  const [timeToEnd, setTimeToEnd] = useState("");
  const [contact, setContact] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [copied, setCopied] = useState(false);
  const [pendingMessage, setPendingMessage] = useState("");
  const [sending, setSending] = useState(false);

  const isValid = useMemo(() => {
    return !!(dateFrom && dateTo && timeFrom && timeTo && contact.trim() && userMessage.trim());
  }, [dateFrom, dateTo, timeFrom, timeTo, contact, userMessage]);

  const availableTimeTo = useMemo(() => HOURS.filter((h) => h > timeFrom), [timeFrom]);
  const availableTimeToEnd = useMemo(() => HOURS.filter((h) => h > timeFromEnd), [timeFromEnd]);

  const handleFromSelect = (date: Date | undefined) => {
    setDateFrom(date);
    setCalFromOpen(false);
    if (date && (!dateTo || dateTo < date)) {
      setDateTo(date);
    }
  };

  const handleToSelect = (date: Date | undefined) => {
    setDateTo(date);
    setCalToOpen(false);
  };

  const buildMessage = () => {
    if (!dateFrom || !dateTo) return "";
    const fromDate = format(dateFrom, "dd.MM.yyyy");
    const toDate = format(dateTo, "dd.MM.yyyy");
    const fromTime = `${timeFrom}–${timeTo}`;
    const toTime = timeFromEnd && timeToEnd ? `${timeFromEnd}–${timeToEnd}` : "";

    let message: string;
    if (fromDate === toDate) {
      message = `Hi! I'd like to book: ${fromDate}, ${fromTime}.`;
    } else {
      message = `Hi! I'd like to book:\n📅 ${fromDate}, ${fromTime}\n📅 ${toDate}${toTime ? `, ${toTime}` : ""}`;
    }
    message += `\n\nMy contact: ${contact.trim()}`;
    message += `\n\n${userMessage.trim()}`;
    return message;
  };

  const handleRequest = async () => {
    if (!isValid || sending) return;
    const message = buildMessage();
    setPendingMessage(message);
    setCopied(false);
    setSending(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-booking-email", {
        body: {
          dateFrom: dateFrom ? format(dateFrom, "dd.MM.yyyy") : "",
          dateTo: dateTo ? format(dateTo, "dd.MM.yyyy") : "",
          timeFrom,
          timeTo,
          timeFromEnd: timeFromEnd || "",
          timeToEnd: timeToEnd || "",
          contact: contact.trim(),
          message: message + (userMessage.trim() ? `\n\n${userMessage.trim()}` : ""),
        },
      });

      if (error) throw error;

      toast({
        title: t("bookingCopiedTitle"),
        description: data?.emailSent
          ? "Booking saved & email sent!"
          : "Booking saved!",
      });
    } catch (err) {
      console.error("Booking error:", err);
      toast({
        title: "Error",
        description: "Could not save booking. Please try via Instagram.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }

    setShowDialog(true);
  };

  const handleCopyAndOpen = async () => {
    try {
      await navigator.clipboard.writeText(pendingMessage);
      setCopied(true);
      setTimeout(() => {
        window.open(
          `https://ig.me/m/${INSTAGRAM_USERNAME}`,
          "_blank",
          "noopener,noreferrer"
        );
      }, 500);
    } catch {
      window.prompt(t("bookingCopyFallback"), pendingMessage);
    }
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

        {/* FROM: date + time */}
        <div className="mb-6">
          <label className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t("bookingDateFrom")}
          </label>
          <div className="flex gap-3">
            <Popover open={calFromOpen} onOpenChange={setCalFromOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "flex-1 justify-start text-left font-body font-normal",
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

            <Select value={timeFrom} onValueChange={(v) => { setTimeFrom(v); if (timeTo && v >= timeTo) setTimeTo(""); }}>
              <SelectTrigger className="w-[110px] font-body">
                <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                <SelectValue placeholder="—" />
              </SelectTrigger>
              <SelectContent>
                {HOURS.map((h) => (
                  <SelectItem key={h} value={h}>{h}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={timeTo} onValueChange={setTimeTo} disabled={!timeFrom}>
              <SelectTrigger className="w-[110px] font-body">
                <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                <SelectValue placeholder="—" />
              </SelectTrigger>
              <SelectContent>
                {availableTimeTo.map((h) => (
                  <SelectItem key={h} value={h}>{h}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* TO: date + time */}
        <div className="mb-6">
          <label className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t("bookingDateTo")}
          </label>
          <div className="flex gap-3">
            <Popover open={calToOpen} onOpenChange={setCalToOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "flex-1 justify-start text-left font-body font-normal",
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

            <Select value={timeFromEnd} onValueChange={(v) => { setTimeFromEnd(v); if (timeToEnd && v >= timeToEnd) setTimeToEnd(""); }}>
              <SelectTrigger className="w-[110px] font-body">
                <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                <SelectValue placeholder="—" />
              </SelectTrigger>
              <SelectContent>
                {HOURS.map((h) => (
                  <SelectItem key={h} value={h}>{h}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={timeToEnd} onValueChange={setTimeToEnd} disabled={!timeFromEnd}>
              <SelectTrigger className="w-[110px] font-body">
                <Clock className="mr-1 h-3 w-3 text-muted-foreground" />
                <SelectValue placeholder="—" />
              </SelectTrigger>
              <SelectContent>
                {availableTimeToEnd.map((h) => (
                  <SelectItem key={h} value={h}>{h}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

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

        {/* Message textarea */}
        <div className="mb-6">
          <label className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t("bookingMessage")}
          </label>
          <Textarea
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value.slice(0, 500))}
            placeholder={t("bookingMessagePlaceholder")}
            maxLength={500}
            rows={3}
            className="font-body resize-none"
          />
          <p className="mt-1 text-right font-body text-xs text-muted-foreground">
            {userMessage.length}/500
          </p>
        </div>

        <p className="mb-8 flex items-center justify-center gap-2 font-body text-xs text-muted-foreground">
          <Instagram size={14} />
          {t("bookingFollowReminder")}
        </p>

        {/* Submit */}
        <Button
          onClick={handleRequest}
          disabled={!isValid || sending}
          className="inline-flex items-center gap-3 border border-primary bg-transparent px-8 py-3.5 font-body text-xs uppercase tracking-[0.3em] text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground disabled:opacity-40"
          variant="outline"
        >
          {sending ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
          {sending ? "Sending..." : isValid ? t("bookingRequestDates") : t("bookingSelectDates")}
        </Button>
      </div>

      {/* Copy & Open Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">
              {t("bookingCopiedTitle")}
            </DialogTitle>
            <DialogDescription className="font-body text-sm text-muted-foreground">
              {t("bookingDialogInstruction")}
            </DialogDescription>
          </DialogHeader>

          <div className="my-4 rounded-md border border-border bg-muted/50 p-4 font-body text-sm whitespace-pre-line text-foreground">
            {pendingMessage}
          </div>

          <div className="flex gap-3">
            <Button
              onClick={handleCopyAndOpen}
              className="flex-1 gap-2"
              variant={copied ? "secondary" : "default"}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? t("bookingCopiedDone") : t("bookingCopyBtn")}
            </Button>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => {
                window.open(
                  `https://ig.me/m/${INSTAGRAM_USERNAME}`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <Instagram size={14} />
              {t("bookingOpenIG")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BookingSection;
