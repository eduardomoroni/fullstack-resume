import Axios from 'axios';

export const getName = () =>
  Axios.get(`/candidate`)
    .then(res => res.data)
    .catch(console.warn);
export const getExperiences = () =>
  Axios.get(`/candidate/experience`)
    .then(res => res.data)
    .catch(console.warn);
export const getWorkExperience = () =>
  Axios.get(`/candidate/experience/work`)
    .then(res => res.data)
    .catch(console.warn);
