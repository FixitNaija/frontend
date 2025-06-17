import { baseInstance } from "./base";


export const signUp = (data) => {
    return baseInstance.post('api/v1/user/signup', data);
}

 export const login = (data) => {
    return baseInstance.post('api/v1/user/login', data);
}