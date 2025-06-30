
import axios from 'axios';


export const baseInstance = axios.create({
  baseURL: 'https://fixitbackend-7zrf.onrender.com/',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false
});

// baseInstance.post('/api/v1/user/signup', userData)
//   .then(response => {
//     console.log('Signup successful:', response.data);
//   })
//   .catch(error => {
//     console.error('Signup error:', error.response?.data || error.message);
//   });
