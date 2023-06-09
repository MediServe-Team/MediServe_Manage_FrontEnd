import { axiosPrivate } from '../../lib/axios';

export const loginService = (email, password) => {
  return axiosPrivate.post('/auth/login', { email, password });
};
