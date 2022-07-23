import axios from 'axios';

const service = axios.create({
  timeout: 60000
});

export default service;
