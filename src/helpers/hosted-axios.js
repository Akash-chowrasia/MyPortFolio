import axios from 'axios';
import config from '../config';

export const hostedAxios = axios.create({
  baseURL: config.SERVER_BASE_URL,
  withCredentials: true,
});
