import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const NOTIFICATION_EMAIL = "dar58m@gmail.com";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { dateFrom, dateTo, timeFrom, timeTo, timeFromEnd, timeToEnd, contact, message } = await req.json();

    // Save to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from("bookings").insert({
      date_from: dateFrom,
      date_to: dateTo,
      time_from: timeFrom,
      time_to: timeTo,
      time_from_end: timeFromEnd || null,
      time_to_end: timeToEnd || null,
      contact,
      message,
    });

    if (dbError) {
      console.error("DB error:", dbError);
      throw new Error("Failed to save booking");
    }

    // Send email via Resend
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) {
      throw new Error("RESEND_API_KEY not configured");
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 2px solid #c9a96e; padding-bottom: 10px;">📸 New Booking Request</h2>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>📅 Date From:</strong> ${dateFrom}</p>
          <p><strong>📅 Date To:</strong> ${dateTo}</p>
          <p><strong>🕐 Time:</strong> ${timeFrom} – ${timeTo}</p>
          ${timeFromEnd ? `<p><strong>🕐 Time (day 2):</strong> ${timeFromEnd} – ${timeToEnd || ""}</p>` : ""}
          <p><strong>📞 Contact:</strong> ${contact}</p>
        </div>
        <div style="background: #fff3e0; padding: 15px; border-radius: 8px; border-left: 4px solid #c9a96e;">
          <p style="margin: 0; white-space: pre-line;"><strong>Message:</strong><br/>${message}</p>
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 20px;">Sent from your portfolio booking form</p>
      </div>
    `;

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Dara Booking <booking@daramodel.com>",
        to: [NOTIFICATION_EMAIL],
        subject: `New Booking: ${dateFrom} — ${contact}`,
        html: emailHtml,
      }),
    });

    const emailData = await emailRes.json();

    if (!emailRes.ok) {
      console.error("Resend error:", emailData);
      // Still return success since booking was saved
      // Continue to send Telegram even if email fails
    }

    // Send Telegram notification
    let telegramSent = false;
    const telegramToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const telegramChatId = Deno.env.get("TELEGRAM_CHAT_ID");

    if (telegramToken && telegramChatId) {
      const telegramText = `📸 *New Booking Request*\n\n📅 Date: ${dateFrom} — ${dateTo}\n🕐 Time: ${timeFrom} – ${timeTo}${timeFromEnd ? `\n🕐 Time (day 2): ${timeFromEnd} – ${timeToEnd || ""}` : ""}\n📞 Contact: ${contact}\n\n💬 Message:\n${message}`;

      try {
        const tgRes = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: telegramText,
            parse_mode: "Markdown",
          }),
        });
        const tgData = await tgRes.json();
        telegramSent = tgData.ok === true;
        if (!telegramSent) console.error("Telegram error:", tgData);
      } catch (tgErr) {
        console.error("Telegram fetch error:", tgErr);
      }
    }

    return new Response(
      JSON.stringify({ success: true, emailSent: emailRes.ok, telegramSent, booking: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
