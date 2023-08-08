import emailjs from '@emailjs/nodejs';
import nodemailer from 'nodemailer';

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

const MAIL_SERVICE_HOST = 'smtp.office365.com';
const MAIL_SERVICE_PORT = '25';
const MAIL_AUTH_USER = 'test.rtsweb@rtsit.ae';
const MAIL_AUTH_PASS = 'Dubai@2020$';
const MAIL_AUTH_NAME = 'RTS';

/**
 * To send a mail through nodemailer
 * @param {Object} body - { name, email, role, password } | { name, email, token }
 * @returns success message
 */
export const sendNodeMailer = (samp, type, body) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !type ||
        !['DEP_MAIL', 'REPLY_MAIL', 'SUBSCRIBE_MAIL'].includes(type)
      ) {
        return reject({
          message:
            'Provide type(DEP_MAIL, REPLY_MAIL, SUBSCRIBE_MAIL) and body',
        });
      }
      const { email } = body;

      // create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        host: MAIL_SERVICE_HOST,
        port: MAIL_SERVICE_PORT,
        secure: MAIL_SERVICE_PORT == '465' ? true : false, // true for 465, false for other ports
        // secureConnection: false,
        // tls: {
        //   ciphers: "SSLv3",
        // },
        // requireTLS: true,
        // debug: true,
        auth: {
          user: MAIL_AUTH_USER,
          pass: MAIL_AUTH_PASS,
        },
      });

      console.log(transporter);

      const message = {
        from: `"${MAIL_AUTH_NAME}" <${MAIL_AUTH_USER}>`,
        to: email,
        subject: 'HIIII',
        text: 'HIIIIIIIII',
        html: '<h1>HIIIIIIIII</h1>',
      };

      console.log(message);

      const info = await transporter.sendMail(message);

      console.log(info);

      resolve({
        success: true,
        message: `Message sent: ${info.messageId}`,
      });
    } catch (error) {
      console.log('Email not sent! in Nodemailer => ', error.message);
      console.log(error);
      reject({ message: error.message, code: error.code });
    }
  });
};

export default sendNodeMailer;
