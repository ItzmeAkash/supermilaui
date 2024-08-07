// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Set your base URL here
  // You can also add other default settings like headers, timeout, etc.
});

export default axiosInstance;
