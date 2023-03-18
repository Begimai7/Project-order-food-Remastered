import { axiosInstance } from "../config/axiosInstance"

export const SignUpReq = (data) => {
 return axiosInstance.post('/auth/register', data)
}
export const SignInReq = (data) => {
 return axiosInstance.post('/auth/login', data)
}