import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.PUBLIC_SUPABASE_ANON_KEY!;
const resendApiKey = process.env.RESEND_API_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);
const resend = new Resend(resendApiKey);

function generateToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export default async function handler(request: Request) {
  // Only allow POST
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Valid email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check if already subscribed
    const { data: existing } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('email', email)
      .single();

    if (existing?.verified) {
      return new Response(JSON.stringify({ message: 'You are already subscribed!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Generate verification token
    const verificationToken = generateToken();

    if (existing) {
      // Update existing unverified subscriber
      await supabase
        .from('newsletter_subscribers')
        .update({ verification_token: verificationToken })
        .eq('email', email);
    } else {
      // Insert new subscriber
      const { error: insertError } = await supabase
        .from('newsletter_subscribers')
        .insert({
          email,
          verification_token: verificationToken,
          verified: false,
        });

      if (insertError) {
        console.error('Insert error:', insertError);
        return new Response(JSON.stringify({ error: 'Failed to subscribe' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // Send verification email
    const siteUrl = process.env.URL || 'https://cyns.space';
    const verifyUrl = `${siteUrl}/.netlify/functions/verify?token=${verificationToken}&email=${encodeURIComponent(email)}`;

    const { error: emailError } = await resend.emails.send({
      from: 'Andrian Cahyono <andrian@cyns.space>',
      to: email,
      subject: 'Verify your subscription to Andrian\'s Blog',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="background-color: #1a1a1a; padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Welcome! 👋</h1>
            </div>
            <div style="padding: 30px;">
              <p style="color: #333333; font-size: 16px; line-height: 1.6;">
                Thank you for subscribing to my newsletter! You'll receive updates when I publish new articles about software engineering, development tips, and tech insights.
              </p>
              <p style="color: #333333; font-size: 16px; line-height: 1.6;">
                Please verify your email address by clicking the button below:
              </p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${verifyUrl}" style="display: inline-block; background-color: #22c55e; color: #ffffff; padding: 14px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
                  Verify Email
                </a>
              </div>
              <p style="color: #666666; font-size: 14px; line-height: 1.6;">
                If the button doesn't work, copy and paste this link into your browser:<br>
                <a href="${verifyUrl}" style="color: #22c55e; word-break: break-all;">${verifyUrl}</a>
              </p>
            </div>
            <div style="background-color: #f8f8f8; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="color: #888888; font-size: 12px; margin: 0;">
                © 2024 Andrian Cahyono | <a href="https://cyns.space" style="color: #888888;">cyns.space</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (emailError) {
      console.error('Email error:', emailError);
      return new Response(JSON.stringify({ error: 'Failed to send verification email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ 
      message: 'Please check your email to verify your subscription!' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Subscribe error:', error);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
