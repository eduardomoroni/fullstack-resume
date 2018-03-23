import Axios from 'axios';

export const initializeAxios = () => {
  Axios.defaults.headers.post['Content-Type'] = 'application/json';
  Axios.defaults.headers.post['Accept'] = 'application/json';
  Axios.defaults.baseURL = process.env.API_URL;
};
