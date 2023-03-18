import { axiosInstance } from "../config/axiosInstance"


export const getMealsToBasketReq = () => {
 return axiosInstance.get('/basket')
}
export const addMealsToBasketReq = (newItem) => {
 return axiosInstance.post(`/foods/${newItem.id}/addToBasket`, {
  body: {amount: newItem.amount}
 })
}
export const updateBasketItemReq = (id, amount) => {
 return axiosInstance.update(`/basketItem/${id}/update`, {
  body: { amount }
 })
}
export const deleteBasketItemReq = (id, amount) => {
 return axiosInstance.delete(`/basketItem/${id}/delete`)
}
export const submitOrderReq = (orderData) => {
 return axiosInstance.post("https://jsonplaceholder.typicode.com/posts", {
  body: orderData
 })
}