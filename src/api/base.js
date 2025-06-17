import axios from 'axios';

export const baseInstance = axios.create({
  baseURL: 'https://fixitbackend-7zrf.onrender.com/',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
},
withCredentials: false
});