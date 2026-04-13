import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: Request) {
  if (!resend) {
    console.warn('RESEND_API_KEY is not set. Email notification skipped.');
    return NextResponse.json({ success: true, message: 'Email skipped (no API key)' });
  }

  try {
    const body = await req.json();
    const { fullName, email, phone, company, service, message, type } = body;

    const subject = type === 'quote' 
      ? `New Quote Request: ${service} from ${fullName}`
      : `New Contact Message from ${fullName}`;

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; rounded: 10px;">
        <h2 style="color: #054a29;">${subject}</h2>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Service:</strong> ${service}</p>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #666;">
          This message was sent from the ${type === 'quote' ? 'Quote Request' : 'Contact'} form on your website.
        </p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Website <onboarding@resend.dev>', // Note: User needs to verify domain to use custom sender
      to: ['submissions@sibongilevictor.co.za'],
      subject: subject,
      html: html,
      replyTo: email,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
