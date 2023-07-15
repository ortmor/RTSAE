import validator from 'validator';
import axios from 'axios';

const API_ENDPOINT = '/api/subscribe';

const doSubscribe = async (email) => {
  try {
    if (!email || !validator.isEmail(email)) {
      return {
        isSuccess: false,
        message: 'Please enter a valid email',
      };
    }
    const response = await axios.post(API_ENDPOINT, { email });
    return {
      isSuccess: true,
      message: response.data.message || 'Subscribed successfully',
    };
  } catch (error) {
    console.log(error.message, error);
    return {
      isSuccess: false,
      message:
        error?.response?.data?.message ||
        'Something went wrong. Please try again later',
    };
  }
};

const doUnsubscribe = async (email) => {
  try {
    if (!email || !validator.isEmail(email)) {
      return {
        isSuccess: false,
        message: 'Please enter a valid email',
      };
    }
    const response = await axios.delete(API_ENDPOINT, { params: { email } });
    return {
      isSuccess: true,
      message: response.data.message || 'Unsubscribed successfully',
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

export { doSubscribe, doUnsubscribe };
