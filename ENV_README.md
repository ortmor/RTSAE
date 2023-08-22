# Updating Production Credentials and Restarting RTS_WEBSITE

## Overview

This document provides a streamlined process for updating production credentials in the `.env` configuration file and then restarting the `RTS_WEBSITE` application using `pm2`. This process covers scenarios where the `.env` file needs to be created or updated with new key-value pairs.

## Prerequisites

- Access to the production environment.
- Familiarity with the `.env` configuration file and its syntax.
- Understanding of the `pm2` process manager.

## Procedure

1. **Access Production Environment**:
   Ensure you have the necessary permissions and access to the production environment to make changes and restart processes.

2. **Check for `.env` File**:
   Before proceeding, check if the `.env` file exists in the root directory of the `RTS_WEBSITE` application. If the file does not exist, create a new file named `.env`.

3. **Update Key Values**:
   Open the `.env` file using a text editor or configuration management tool. If the file is being created, add the following lines for the key values:

   ```plaintext
   SALES_ENQUIRY_EMAIL_ID=new_value
   SUPPORT_EMAIL_ID=new_value
   RTS_USERNAME=new_value
   RTS_PASSWORD=new_value
   MAIL_SERVICE_HOST=new_value
   MAIL_SERVICE_PORT=new_value
   MAIL_AUTH_USER=new_value
   MAIL_AUTH_PASS=new_value
   MAIL_AUTH_NAME=new_value
   CONTACT_CAPTCHA_SECRET=new_value
   ```

   If the `.env` file already exists, update the corresponding values as needed.

4. **Secure the Updated `.env` File**:
   Store the updated `.env` file securely in the root directory of the `RTS_WEBSITE` application. Apply any relevant security measures, such as encryption and access restrictions.

5. **Restart `RTS_WEBSITE` using `pm2`**:
   Open a terminal or command prompt and navigate to the directory containing the `RTS_WEBSITE` application. Run the following command to restart the application using `pm2`:

   ```bash
   pm2 restart RTS_WEBSITE
   ```

6. **Monitor the Restart Process**:
   Monitor the terminal output to ensure that the `RTS_WEBSITE` application restarts successfully without any errors. Check the logs for any issues.

## Best Practices

- **Automated Deployment**: Consider automating the deployment process using deployment scripts or CI/CD pipelines for consistency and reduced human error.

- **Backup Strategy**: Maintain a backup of the previous `.env` file and a version-controlled copy of the updated `.env` file for historical reference.

- **Testing**: Before deploying to production, thoroughly test the updates in a staging or testing environment to identify and resolve any potential issues.

## Conclusion

Updating production credentials and restarting the `RTS_WEBSITE` application requires careful execution to ensure the security and stability of the environment. By following the steps outlined in this document, you can confidently make changes to the `.env` file and manage the application restart process using `pm2`. Always prioritize security, testing, and best practices in your deployment procedures.
