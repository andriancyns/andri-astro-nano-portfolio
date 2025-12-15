import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(event: any) {
  // Only allow GET
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const params = event.queryStringParameters || {};
    const { token, email } = params;

    if (!token || !email) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'text/html' },
        body: generateHtml('error', 'Invalid verification link'),
      };
    }

    // Find subscriber with matching token and email
    const { data: subscriber, error: findError } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('email', email)
      .eq('verification_token', token)
      .single();

    if (findError || !subscriber) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'text/html' },
        body: generateHtml('error', 'Invalid or expired verification link'),
      };
    }

    if (subscriber.verified) {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/html' },
        body: generateHtml('success', 'Your email is already verified!'),
      };
    }

    // Update subscriber as verified
    const { error: updateError } = await supabase
      .from('newsletter_subscribers')
      .update({
        verified: true,
        verified_at: new Date().toISOString(),
        verification_token: null,
      })
      .eq('email', email);

    if (updateError) {
      console.error('Update error:', updateError);
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'text/html' },
        body: generateHtml('error', 'Failed to verify email'),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: generateHtml('success', 'Email verified successfully! You will now receive newsletter updates.'),
    };
  } catch (error) {
    console.error('Verify error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'text/html' },
      body: generateHtml('error', 'Something went wrong'),
    };
  }
}

function generateHtml(status: 'success' | 'error', message: string): string {
  const isSuccess = status === 'success';
  const icon = isSuccess ? '✓' : '✗';
  const bgColor = isSuccess ? '#22c55e' : '#ef4444';

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${isSuccess ? 'Verified' : 'Error'} - Newsletter</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: #0a0a0a;
          color: #ffffff;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .container {
          text-align: center;
          max-width: 400px;
        }
        .icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: ${bgColor};
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          font-size: 40px;
          color: white;
        }
        h1 {
          font-size: 24px;
          margin-bottom: 12px;
        }
        p {
          color: #a0a0a0;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        a {
          display: inline-block;
          padding: 12px 24px;
          background-color: #ffffff;
          color: #0a0a0a;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          transition: opacity 0.2s;
        }
        a:hover { opacity: 0.9; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="icon">${icon}</div>
        <h1>${isSuccess ? 'Verified!' : 'Oops!'}</h1>
        <p>${message}</p>
        <a href="https://cyns.space/blog">Back to Blog</a>
      </div>
    </body>
    </html>
  `;
}
