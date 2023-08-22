import axios from 'axios';
import validator from 'validator';
const API_ENDPOINT = '/api/contact';

const checkEmptyFields = (fields) => {
  const emptyFields = [];

  fields.forEach((field) => {
    if (!field.value || field.value.trim() === '') {
      emptyFields.push(field.name);
    }
  });

  return emptyFields;
};

const validateData = (data) => {
  return new Promise((resolve, reject) => {
    try {
      const { fname, lname, email, phone, type, message } = data;

      const fieldsToCheck = [
        { name: 'First Name', value: fname },
        { name: 'Last Name', value: lname },
        { name: 'Type', value: type },
        { name: 'Email', value: email },
        { name: 'Phone', value: phone },
        { name: 'Message', value: message },
      ];

      const emptyFields = checkEmptyFields(fieldsToCheck);

      if (emptyFields.length > 0) {
        const errorMessage = `Please provide following fields: ${emptyFields.join(
          ', '
        )}`;
        throw new Error(errorMessage);
      }

      if (!validator.isEmail(email)) {
        throw new Error('Invalid email address');
      }

      resolve(true);
    } catch (error) {
      reject({ message: error.message });
    }
  });
};

const sendContactForm = async (data) => {
  try {
    await validateData(data);
    const response = await axios.post(API_ENDPOINT, data);
    return {
      isSuccess: true,
      message: response.data.message || 'Thank you for contacting us',
    };
  } catch (error) {
    return {
      isSuccess: false,
      message:
        error?.response?.data?.message ||
        'Something went wrong. Please try again later',
    };
  }
};

export default sendContactForm;
