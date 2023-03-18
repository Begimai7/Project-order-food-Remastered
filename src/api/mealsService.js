import { axiosInstance } from "../config/axiosInstance"

export const getMealsReq = () => {
 return axiosInstance.get('/foods')
}
export const postMealsReq = (newMeal, token) => {
 return axiosInstance.post('/foods', newMeal, {
  headers: {Authorization: token}
 })
}
export const deleteMealsReq = (id, token) => {
 return axiosInstance.delete(`/foods/${id}`, {
  headers: {Authorization: token}
 })
}
// export const updateMealsReq = (id, token) => {
//  return axiosInstance.update('/foods', {
//   headers: {Authorization: token}})
// }
