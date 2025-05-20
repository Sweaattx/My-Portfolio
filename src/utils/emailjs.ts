import emailjs from '@emailjs/browser';

// Inicializamos EmailJS con la clave pública
export const initEmailJS = () => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  if (!publicKey) {
    console.error('EmailJS public key is not configured');
    return;
  }
  emailjs.init(publicKey);
};

// Función para enviar el email
export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  
  if (!serviceId || !templateId) {
    throw new Error('EmailJS configuration is incomplete');
  }

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL,
        reply_to: formData.email, // Permite responder directamente al email del remitente
      }
    );

    if (response.status === 200) {
      console.log('Email sent successfully');
      return response;
    } else {
      throw new Error('Failed to send email');
    }  } catch (err) {
    console.error('Error sending email:', err);
    throw err;
  }
};
