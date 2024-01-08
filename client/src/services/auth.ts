import axios from 'axios';
import { API_URL } from '../shared/apiEndPointURL';

export const signInService = async (requestBody: { email: string; password: string }) => {
  const result = await axios
    .post(API_URL.signIn, requestBody)
    .then((response) => response)
    .catch((error) => {
      if (error.response.data.message) throw new Error(error.response.data.message);
      else throw new Error('Something went wrong!');
    });

  return result;
};
