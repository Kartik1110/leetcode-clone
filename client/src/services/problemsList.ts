import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../shared/apiEndPointURL';
import { Problems } from '../interfaces';

export const problemsListService = async (): Promise<AxiosResponse<Problems[]>> => {
  const result = await axios
    .get(API_URL.problemsList, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((response) => response)
    .catch((error) => {
      if (error.response.data.message) throw new Error(error.response.data.message);
      else throw new Error('Something went wrong!');
    });

  return result;
};
