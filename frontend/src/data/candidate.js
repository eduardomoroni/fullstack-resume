import Axios from 'axios';

export const getName = async () =>
  Axios.get('/candidate')
    .then(res => res.data.name)
    .catch(console.warn);

export const getExperiences = async () =>
  Axios.get(`/candidate/experience`)
    .then(res => res.data)
    .catch(console.warn);

export const getWorkExperience = async () =>
  Axios.get(`/candidate/experience/work`)
    .then(res => res.data)
    .catch(console.warn);
