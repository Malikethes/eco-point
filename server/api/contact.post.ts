export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, message } = body;

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    });
  }

  const config = useRuntimeConfig();
  
  if (!config.resendApiKey) {
    console.error('NUXT_RESEND_API_KEY is not set');
    throw createError({
      statusCode: 500,
      statusMessage: 'Email service not configured'
    });
  }
  
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'EcoPoint Contact <onboarding@resend.dev>',
        to: ['betterthannever.business@gmail.com'],
        reply_to: email,
        subject: `New Contact Form Message from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Resend API error:', response.status, errorData);
      throw createError({
        statusCode: response.status,
        statusMessage: `Resend API error: ${errorData}`
      });
    }

    const data = await response.json();
    console.log('Email sent successfully:', data);

    return {
      success: true,
      message: 'Email sent successfully'
    };
  } catch (error: any) {
    console.error('Email sending error:', error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to send email'
    });
  }
});
