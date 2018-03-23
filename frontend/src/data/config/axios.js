import Axios from 'axios';

export const initializeAxios = () => {
  Axios.defaults.timeout = 2500;
  Axios.defaults.baseURL = 'http://localhost:3001';
  Axios.defaults.headers.common['Accept'] = 'application/json';
  Axios.defaults.headers.common['Content-Type'] = 'application/json';
};
