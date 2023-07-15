import emailjs from '@emailjs/nodejs';

const { EMAILJS_SERVICE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY } =
  process.env;

const sendEmail = (name, templateId, emailParams) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!templateId || !emailParams) {
        reject({
          name: 'SEND_EMAIL_ERROR',
          message: 'Please provide templateId and emailParams',
          statusCode: 400,
        });
      }
      await emailjs.send(EMAILJS_SERVICE_ID, templateId, emailParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
        privateKey: EMAILJS_PRIVATE_KEY,
      });
      console.log('Mail sent with ', emailParams);
      resolve({
        success: true,
        message: 'Email sent successfully',
      });
    } catch (error) {

 
      reject({
        name: name || 'SEND_EMAIL_ERROR',
        message: error.message,
        statusCode: error.statusCode || 500,
      });
    }
  });
};

export default sendEmail;
