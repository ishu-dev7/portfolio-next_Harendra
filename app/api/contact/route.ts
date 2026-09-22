import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "jnvk.harendrasingh1951999@gmail.com";

export async function POST(req: NextRequest) {
  const { name, email, phone, company, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#13131a;border-radius:16px;overflow:hidden;border:1px solid #1e1e2e;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#7C5CFF,#3D5AFE);padding:32px 36px;">
              <p style="margin:0 0 4px;font-size:12px;letter-spacing:3px;color:rgba(255,255,255,0.7);text-transform:uppercase;">Portfolio Contact</p>
              <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;">New Message Received</h1>
            </td>
          </tr>

          <!-- Sender Info -->
          <tr>
            <td style="padding:32px 36px 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48" valign="top">
                    <div style="width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,#7C5CFF,#22D3EE);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;color:#fff;text-align:center;line-height:48px;">
                      ${name.charAt(0).toUpperCase()}
                    </div>
                  </td>
                  <td style="padding-left:14px;">
                    <p style="margin:0;font-size:18px;font-weight:600;color:#ffffff;">${name}</p>
                    <p style="margin:4px 0 0;font-size:13px;color:#22D3EE;">${email}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:24px 36px 0;">
              <div style="height:1px;background:linear-gradient(90deg,#7C5CFF44,#22D3EE44,transparent);"></div>
            </td>
          </tr>

          <!-- Details Grid -->
          <tr>
            <td style="padding:24px 36px 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  ${phone ? `
                  <td width="50%" valign="top" style="padding-right:12px;padding-bottom:16px;">
                    <p style="margin:0 0 4px;font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#6b7280;">Phone</p>
                    <p style="margin:0;font-size:14px;color:#e5e7eb;">${phone}</p>
                  </td>` : ""}
                  ${company ? `
                  <td width="50%" valign="top" style="padding-bottom:16px;">
                    <p style="margin:0 0 4px;font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#6b7280;">Company</p>
                    <p style="margin:0;font-size:14px;color:#e5e7eb;">${company}</p>
                  </td>` : ""}
                </tr>
              </table>
            </td>
          </tr>

          <!-- Subject -->
          ${subject ? `
          <tr>
            <td style="padding:0 36px 20px;">
              <p style="margin:0 0 4px;font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#6b7280;">Subject</p>
              <p style="margin:0;font-size:15px;font-weight:600;color:#ffffff;">${subject}</p>
            </td>
          </tr>` : ""}

          <!-- Message -->
          <tr>
            <td style="padding:0 36px 32px;">
              <p style="margin:0 0 10px;font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#6b7280;">Message</p>
              <div style="background:#0d0d16;border:1px solid #1e1e2e;border-left:3px solid #7C5CFF;border-radius:8px;padding:18px 20px;">
                <p style="margin:0;font-size:15px;line-height:1.7;color:#d1d5db;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 36px 32px;">
              <a href="mailto:${email}?subject=Re: ${subject || "Your message"}"
                 style="display:inline-block;background:linear-gradient(135deg,#7C5CFF,#3D5AFE);color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 28px;border-radius:8px;">
                Reply to ${name}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0d0d16;border-top:1px solid #1e1e2e;padding:20px 36px;">
              <p style="margin:0;font-size:12px;color:#4b5563;text-align:center;">
                This message was sent via your portfolio contact form at
                <span style="color:#7C5CFF;">portfolio-harendra.vercel.app</span>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject || "New message"} — from ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
