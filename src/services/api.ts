import axios from 'axios';

const api = axios.create({
  baseURL: 'https://r6stats.com/api',
});

export default api;
