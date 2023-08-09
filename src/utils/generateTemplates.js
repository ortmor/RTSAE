/**
 *
 * @param {String} type - html | text
 * @param {Object}} { name, email, role }
 * @returns
 */
export const generateContactInqiryMailTemplate = (
  gtype,
  { name, type, email, phone, message }
) => {
  if (gtype && gtype === 'text') {
    return `
    Dear RTS Team,\n
    We hope this message finds you well. We are writing to inform you that your website has received a new contact inquiry. Below are the details:\n
      \tName: \t${name}
      \tType: \t${type}
      \tEmail: \t${email}
      \tPhone: \t${phone}
      \tMessage: \t${message}
      \n We take great pride in witnessing the engagement and interest from users on your platform. As a result, we urge you to address this inquiry promptly and professionally.
      \n Your dedication to excellent customer service is highly appreciated.
      \n\n Best regards,
      \n Team RTS
          `;
  } else {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style="text-align: left">
        <h2>Dear RTS Team,</h2>
    
        <p>
          We hope this message finds you well. We are writing to inform you that
          your website has received a new contact inquiry. Below are the details:
        </p>
    
        <h2>Name: <span style="font-size: 16px;">${name}</span></h2> 
    
        <h2>Inquiry Type: <span style="font-size: 16px;">${type}</span></h2>
    
        <h2>Email: <span style="font-size: 16px;">${email}</span></h2>
    
        <h2>Phone: <span style="font-size: 16px;">${phone}</span></h2>
    
        <h2>Message:</h2>
    
        <p>${message}</p>
    
        <p>
          We take great pride in witnessing the engagement and interest from users
          on your platform. As a result, we urge you to address this inquiry
          promptly and professionally.
        </p>
    
        <p>Your dedication to excellent customer service is highly appreciated.</p>
    
      </body>
    </html>`;
  }
};

/**
 * Get a Contact Reply Mail Template
 * @param {String} type - text || html
 * @param {Object} { name }
 * @returns
 */
export const generateContactReplyMailTemplate = (type, { name, email }) => {
  if (type && type === 'text') {
    return `
    Dear ${name}!,
    \n Greetings from the RTS Team! \n
    \n We hope this email finds you well. We want to extend our heartfelt gratitude to you for taking the time to reach out to us with your insightful questions.
    \n Rest assured, our dedicated team of customer experts is already on the case! They are eagerly working to gather all the necessary information and provide you with comprehensive and timely answers to your inquiries.
    \n At RTS, we are driven by our commitment to delivering top-notch customer service, and your satisfaction is our ultimate goal. Hence, we encourage you to share any additional questions or thoughts that come to mind. Our team is well-equipped to handle any concerns you might have, and we are dedicated to resolving them promptly.
    \n Your choice to rely on RTS for your needs is truly valued, and we can't wait to demonstrate our dedication to your satisfaction. We are determined to make your experience with us seamless and rewarding.
    \n Thank you once again for choosing RTS. We look forward to serving you!
    \n\n Best regards,
    \n Team RTS 
          `;
  } else {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style="text-align: left">
        <h2>Dear ${name},</h2>

        <p>Greetings from the RTS Team! </p>

        <p>
          We hope this email finds you well. We want to extend our heartfelt
          gratitude to you for taking the time to reach out to us with your
          insightful questions.
        </p>

        <p>
          Rest assured, our dedicated team of customer experts is already on the
          case! They are eagerly working to gather all the necessary information and
          provide you with comprehensive and timely answers to your inquiries.
        </p>

        <p>
          At RTS, we are driven by our commitment to delivering top-notch customer
          service, and your satisfaction is our ultimate goal. Hence, we encourage
          you to share any additional questions or thoughts that come to mind. Our
          team is well-equipped to handle any concerns you might have, and we are
          dedicated to resolving them promptly.
        </p>

        <p>
          Your choice to rely on RTS for your needs is truly valued, and we can't
          wait to demonstrate our dedication to your satisfaction. We are determined
          to make your experience with us seamless and rewarding.
        </p>

        <p>
          Thank you once again for choosing RTS. We look forward to serving you!
        </p>

        <p>Best regards,</p>

        <p>Team RTS </p>

      </body>
    </html>
    `;
  }
};

/**
 * Get a Subscribe Mail Template
 * @param {String} type - text || html
 * @param {Object} { email }
 * @returns
 */
export const generateSubscribeMailTemplate = (type, { email }) => {
  if (type && type === 'text') {
    return `
    Hey ${email},
    \n Congratulations, a warm welcome to the RTS family!
    \n We're beyond excited to have you on board, ready to embark on an exhilarating tech journey like no other!
    \n At RTS, we thrive on cutting-edge innovations, interactive experiences, and keeping you ahead in the fast-paced tech world.
    \n Your inbox will soon be filled with regular updates showcasing the latest offerings, fascinating tech articles, and jaw-dropping announcements that will leave you in awe.
    \n Buckle up and hold on tight! The adventure has just begun, and we can't wait to explore the endless possibilities together.
    \n Welcome once again, ${email}!
    \n Best regards,
    \n\n Team RTS 
    `;
  } else {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style="text-align: left">
        <h2>Hey ${email},</h2>

        <p>Congratulations, a warm welcome to the RTS family!</p>

        <p>
          We're beyond excited to have you on board, ready to embark on an
          exhilarating tech journey like no other!
        </p>

        <p>
          At RTS, we thrive on cutting-edge innovations, interactive experiences,
          and keeping you ahead in the fast-paced tech world.
        </p>

        <p>
          Your inbox will soon be filled with regular updates showcasing the latest
          offerings, fascinating tech articles, and jaw-dropping announcements that
          will leave you in awe.
        </p>

        <p>
          Buckle up and hold on tight! The adventure has just begun, and we can't
          wait to explore the endless possibilities together.
        </p>

        <p>Welcome once again, ${email}!</p>

        <p>Best regards,</p>

        <p>Team RTS </p>
         
      </body>
    </html>
    `;
  }
};

/**
 * Get a unsubscribe Mail Template
 * @param {String} type - text || html
 * @param {Object} { email }
 * @returns
 */
export const generateUnsubscribeMailTemplate = (type, { email }) => {
  if (type && type === 'text') {
    return `
      Hey ${email},
      \n Congratulations, a warm welcome to the RTS family!
      \n We're beyond excited to have you on board, ready to embark on an exhilarating tech journey like no other!
      \n At RTS, we thrive on cutting-edge innovations, interactive experiences, and keeping you ahead in the fast-paced tech world.
      \n Your inbox will soon be filled with regular updates showcasing the latest offerings, fascinating tech articles, and jaw-dropping announcements that will leave you in awe.
      \n Buckle up and hold on tight! The adventure has just begun, and we can't wait to explore the endless possibilities together.
      \n Welcome once again, ${email}!
      \n Best regards,
      \n\n Team RTS 
      `;
  } else {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body style="text-align: left">
          <h2>Hey ${email},</h2>
  
          <p>Congratulations, a warm welcome to the RTS family!</p>
  
          <p>
            We're beyond excited to have you on board, ready to embark on an
            exhilarating tech journey like no other!
          </p>
  
          <p>
            At RTS, we thrive on cutting-edge innovations, interactive experiences,
            and keeping you ahead in the fast-paced tech world.
          </p>
  
          <p>
            Your inbox will soon be filled with regular updates showcasing the latest
            offerings, fascinating tech articles, and jaw-dropping announcements that
            will leave you in awe.
          </p>
  
          <p>
            Buckle up and hold on tight! The adventure has just begun, and we can't
            wait to explore the endless possibilities together.
          </p>
  
          <p>Welcome once again, ${email}!</p>
  
          <p>Best regards,</p>
  
          <p>Team RTS </p>
  
           
        </body>
      </html>
      `;
  }
};
