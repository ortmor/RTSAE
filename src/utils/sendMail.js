import nodemailer from 'nodemailer';
import {
  generateContactInqiryMailTemplate,
  generateContactReplyMailTemplate,
  generateSubscribeMailTemplate,
} from './generateTemplates';

const MAIL_SERVICE_HOST = process.env.MAIL_SERVICE_HOST || 'smtp.office365.com';
const MAIL_SERVICE_PORT = process.env.MAIL_SERVICE_PORT || '25';
const MAIL_AUTH_USER = process.env.MAIL_AUTH_USER || 'test.rtsweb@rtsit.ae';
const MAIL_AUTH_PASS = process.env.MAIL_AUTH_PASS || 'Dubai@2020$';
const MAIL_AUTH_NAME = process.env.MAIL_AUTH_NAME || 'RTS';

/**
 * To send a mail through nodemailer
 * @param {Object} data - { name, type, deptMailId, email, phone, message }
 * @returns success message
 */
export const sendNodeMailer = (mailType, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { name, type, deptMailId, email, phone, message } = data;

      if (
        !mailType ||
        ![
          'CONTACT_INQUIRY_MAIL',
          'CONTACT_REPLY_MAIL',
          'SUBSCRIBE_MAIL',
          'UNSUBSCRIBE_MAIL',
        ].includes(mailType) ||
        (mailType === 'CONTACT_INQUIRY_MAIL' &&
          (!name || !type || !email || !phone || !message || !deptMailId)) ||
        (mailType === 'CONTACT_REPLY_MAIL' && !name) ||
        (mailType === 'SUBSCRIBE_MAIL' && !email) ||
        (mailType === 'UNSUBSCRIBE_MAIL' && !email)
      ) {
        return reject({
          message:
            'Provide mailType(CONTACT_INQUIRY_MAIL, CONTACT_REPLY_MAIL, SUBSCRIBE_MAIL) and name, type, email, phone, message',
        });
      }

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

      console.log(1, type);

      const body = {
        from: `"${MAIL_AUTH_NAME}" <${MAIL_AUTH_USER}>`,
        to: mailType === 'CONTACT_INQUIRY_MAIL' ? deptMailId : email,
        subject:
          mailType === 'CONTACT_INQUIRY_MAIL'
            ? 'New Contact Inquiry from Your Website'
            : mailType === 'CONTACT_REPLY_MAIL'
            ? 'Thank you for Your Inquiry - RTS Customer Support'
            : 'Welcome Aboard! Get Ready for an Epic Tech Adventure!',
        text:
          mailType === 'CONTACT_INQUIRY_MAIL'
            ? generateContactInqiryMailTemplate('text', {
                name,
                type,
                email,
                phone,
                message,
              })
            : mailType === 'CONTACT_REPLY_MAIL'
            ? generateContactReplyMailTemplate('text', { name, email })
            : generateSubscribeMailTemplate('text', { email }),
        html:
          mailType === 'CONTACT_INQUIRY_MAIL'
            ? generateContactInqiryMailTemplate('html', {
                name,
                type,
                email,
                phone,
                message,
              })
            : mailType === 'CONTACT_REPLY_MAIL'
            ? generateContactReplyMailTemplate('html', { name, email })
            : generateSubscribeMailTemplate('html', { email }),
      };

      console.log(body);

      const info = await transporter.sendMail(body);

      console.log(info);

      resolve({
        success: true,
        message: `Message sent: ${info.messageId}`,
      });
    } catch (error) {
      console.log('Email not sent! in Nodemailer => ', error.message);
      console.log(error);
      reject({ message: error.message, code: error.code, name: mailType });
    }
  });
};

export default sendNodeMailer;
