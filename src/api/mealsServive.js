import axios from "axios"

export const getMealsReq = () => {
 return axios.get('/foods')
}