import { baseInstance } from "./base";



export const signUp = (data) => {
    return baseInstance.post('api/v1/user/signup', data)
     .then(response => {
    console.log('Signup successful:', response.data);
  })
  .catch(error => {
    console.error('Signup error:', error.response?.data || error.message);
  });
;
}

 export const login = (data) => {
    return baseInstance.post('api/v1/user/login', data);
}