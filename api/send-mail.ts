import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request): Promise<Response> {
  // Allow only POST
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405 }
    );
  }

  try {
    const body = await req.json();

    const {
      formType = 'contact',
      name,
      email,
      message,
      phone,
      subject,
    } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // Send email to Astuto
    await resend.emails.send({
      from: 'Astuto Website <no-reply@astutosolution.com>',
      to: ['ask@astutosolution.com'],
      replyTo: email,
      subject: `[${formType.toUpperCase()}] New enquiry from ${name}`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Form:</strong> ${formType}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    // Auto-reply to user
    await resend.emails.send({
      from: 'Astuto Solutions <no-reply@astutosolution.com>',
      to: email,
      subject: 'We received your message – Astuto Solutions',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting <strong>Astuto Solutions</strong>.</p>
        <p>Our team will get back to you within 24 hours.</p>
        <br/>
        <p>Regards,<br/>Astuto Solutions LLP</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { status: 500 }
    );
  }
}
