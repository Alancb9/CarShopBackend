import axios from './axios';

export const getDataRequest = () => axios.get('/tasks');
export const createDataRequest = (data) => axios.post('/tasks', data);