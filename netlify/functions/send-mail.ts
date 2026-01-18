import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body || '{}');

    const {
      formType = 'contact',
      name,
      email,
      message,
      phone,
      subject,
    } = body;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Email to Astuto
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

    // Auto-reply
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

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
