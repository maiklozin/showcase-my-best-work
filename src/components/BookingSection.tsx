import { useState, useMemo, useEffect, useRef } from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock, Send, Copy, Check, Loader2 } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
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

const RATE_LIMIT_MS = 30_000; // 30 seconds between submissions

const BookingSection = () => {
  const { t } = useI18n();
  const { toast } = useToast();
  const [calOpen, setCalOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const [contact, setContact] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [copied, setCopied] = useState(false);
  const [pendingMessage, setPendingMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const lastSubmitRef = useRef<number>(0);

  const contactRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Contact validation: email, phone, or social handle (at least 3 chars with @, +, or digits)
  const isContactValid = useMemo(() => {
    const c = contact.trim();
    if (c.length < 3) return false;
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRe = /[\d]{6,}/;
    const handleRe = /^@[\w.]{2,}/;
    return emailRe.test(c) || phoneRe.test(c.replace(/[\s\-()+ ]/g, '')) || handleRe.test(c);
  }, [contact]);

  // Message validation: at least 5 real characters
  const isMessageValid = useMemo(() => userMessage.trim().length >= 5, [userMessage]);

  // Progressive step tracking
  const step = useMemo(() => {
    if (!date) return 0;
    if (!timeFrom || !timeTo) return 1;
    if (!isContactValid) return 2;
    if (!isMessageValid) return 3;
    return 4; // all filled
  }, [date, timeFrom, timeTo, isContactValid, isMessageValid]);

  const isValid = step === 4;

  const availableTimeTo = useMemo(() => HOURS.filter((h) => h > timeFrom), [timeFrom]);

  // Auto-focus next field when time is selected
  useEffect(() => {
    if (timeFrom && timeTo && !contact.trim()) {
      setTimeout(() => contactRef.current?.focus(), 300);
    }
  }, [timeFrom, timeTo]);

  const handleDateSelect = (d: Date | undefined) => {
    setDate(d);
    setCalOpen(false);
  };

  const buildMessage = () => {
    if (!date) return "";
    const dateStr = format(date, "dd.MM.yyyy");
    const timeStr = `${timeFrom}–${timeTo}`;
    let message = `Hi! I'd like to book: ${dateStr}, ${timeStr}.`;
    message += `\n\nMy contact: ${contact.trim()}`;
    message += `\n\n${userMessage.trim()}`;
    return message;
  };

  const handleRequest = async () => {
    if (!isValid || sending) return;

    // Honeypot check — bots fill hidden fields
    if (honeypot) return;

    // Rate limit check
    const now = Date.now();
    if (now - lastSubmitRef.current < RATE_LIMIT_MS) {
      toast({
        title: "⏳",
        description: "Please wait before submitting again.",
        variant: "destructive",
      });
      return;
    }
    lastSubmitRef.current = now;
    const message = buildMessage();
    setPendingMessage(message);
    setCopied(false);
    setSending(true);

    try {
      const dateStr = date ? format(date, "dd.MM.yyyy") : "";
      const { data, error } = await supabase.functions.invoke("send-booking-email", {
        body: {
          dateFrom: dateStr,
          dateTo: dateStr,
          timeFrom,
          timeTo,
          timeFromEnd: "",
          timeToEnd: "",
          contact: contact.trim(),
          message: message,
        },
      });

      if (error) throw error;

      setShowDialog(true);

      // Auto-close dialog after 5 seconds
      setTimeout(() => {
        setShowDialog(false);
        // Reset form
        setDate(undefined);
        setTimeFrom("");
        setTimeTo("");
        setContact("");
        setUserMessage("");
      }, 5000);
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
  };

  const handleCopyAndOpen = async () => {
    try {
      await navigator.clipboard.writeText(pendingMessage);
      setCopied(true);
      setTimeout(() => {
        window.open(`https://ig.me/m/${INSTAGRAM_USERNAME}`, "_blank", "noopener,noreferrer");
      }, 500);
    } catch {
      window.prompt(t("bookingCopyFallback"), pendingMessage);
    }
  };

  const glowClass = "ring-2 ring-primary/60 border-primary";

  return (
    <section id="booking" className="border-t border-border px-6 py-12 md:py-24">
      <div className="relative mx-auto max-w-lg text-center">
        <p className="mb-3 font-body text-xs uppercase tracking-[0.4em] text-primary">
          {t("bookingLabel")}
        </p>
        <h2 className="mb-4 font-display text-4xl font-medium italic text-foreground md:text-5xl">
          {t("bookingTitle")}
        </h2>
        <p className="mx-auto mb-10 max-w-md font-body text-sm font-light leading-relaxed text-muted-foreground">
          {t("bookingDescription")}
        </p>

        {/* Date + Time — single row */}
        <div className="mb-6">
          <label className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t("bookingDate")}
          </label>
          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_110px_110px]">
            <Popover open={calOpen} onOpenChange={setCalOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "flex-1 justify-start text-left font-body font-normal transition-all duration-300",
                    !date && "text-muted-foreground",
                    step === 0 && glowClass
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "dd.MM.yyyy") : "—"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
                  disabled={(d) => d < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>

            <Select value={timeFrom} onValueChange={(v) => { setTimeFrom(v); if (timeTo && v >= timeTo) setTimeTo(""); }}>
              <SelectTrigger className={cn("w-full font-body transition-all duration-300 sm:w-[110px]", step === 1 && glowClass)}>
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
              <SelectTrigger className={cn("w-full font-body transition-all duration-300 sm:w-[110px]", step === 1 && timeFrom && glowClass)}>
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

        {/* Contact input */}
        <div className="mb-6">
          <label className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t("bookingContact")}
          </label>
          <Input
            ref={contactRef}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder={t("bookingContactPlaceholder")}
            maxLength={100}
            className={cn("font-body transition-all duration-300", step === 2 && glowClass)}
          />
          {contact.trim().length > 0 && !isContactValid && (
            <p className="mt-1 text-left font-body text-xs text-destructive">
              {t("bookingContactError")}
            </p>
          )}
        </div>

        {/* Message textarea */}
        <div className="mb-6">
          <label className="mb-2 block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t("bookingMessage")}
          </label>
          <Textarea
            ref={messageRef}
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value.slice(0, 500))}
            placeholder={t("bookingMessagePlaceholder")}
            maxLength={500}
            rows={3}
            className={cn("font-body resize-none transition-all duration-300", step === 3 && glowClass)}
          />
          <p className="mt-1 text-right font-body text-xs text-muted-foreground">
            {userMessage.length}/500
          </p>
        </div>

        {/* Honeypot — invisible to users, bots will fill it */}
        <div className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <a
          href="https://instagram.com/dara__es_"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 inline-flex items-center justify-center gap-2 font-body text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          <InstagramIcon size={14} />
          {t("bookingFollowReminder")}
        </a>

        {/* Submit */}
        <Button
          onClick={handleRequest}
          disabled={!isValid || sending}
          className={cn(
            "inline-flex items-center justify-center gap-3 border border-primary bg-transparent px-6 py-3.5 font-body text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground disabled:opacity-40 w-full max-w-md text-center whitespace-normal leading-relaxed",
            isValid && !sending && "ring-2 ring-primary/60 bg-primary/10 scale-[1.02]"
          )}
          variant="outline"
        >
          {sending ? <Loader2 size={14} className="animate-spin shrink-0" /> : <Send size={14} className="shrink-0" />}
          <span>{sending ? "Sending..." : isValid ? t("bookingRequestDates") : t("bookingSelectDates")}</span>
        </Button>
      </div>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={(open) => {
        setShowDialog(open);
        if (!open) {
          setDate(undefined);
          setTimeFrom("");
          setTimeTo("");
          setContact("");
          setUserMessage("");
        }
      }}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">
              {t("bookingSentTitle")}
            </DialogTitle>
            <DialogDescription className="font-body text-sm text-muted-foreground">
              {t("bookingSentDesc")}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3 mt-2">
            <Button
              onClick={handleCopyAndOpen}
              variant="outline"
              className="w-full gap-2"
            >
              <InstagramIcon size={14} />
              {copied ? t("bookingCopiedDone") : t("bookingAlsoIG")}
            </Button>
            <Button
              onClick={() => {
                setShowDialog(false);
                setDate(undefined);
                setTimeFrom("");
                setTimeTo("");
                setContact("");
                setUserMessage("");
              }}
              variant="secondary"
              className="w-full"
            >
              {t("bookingClose")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BookingSection;
