import { baseInstance } from "./base";
import { formDataBaseInstance } from "./base";



export const signUp = (data) => {
    return baseInstance.post('api/v1/user/signup', data);
}

 export const login = (data) => {
    return baseInstance.post('api/v1/user/login', data);
}

export const OTPVerify = (data) => {
    return baseInstance.post('api/v1/user/verify', data);

}
 export const issue = (data, token) => {
    return formDataBaseInstance.post('api/v1/issue/reportissue ', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}