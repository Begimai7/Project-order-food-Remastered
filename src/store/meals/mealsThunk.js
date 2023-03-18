import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMealsReq, postMealsReq, deleteMealsReq,  } from '../../api/mealsService';
import { store } from '../store';

export const getMeals = createAsyncThunk(
  'meals/getMeals',
  async (_, { rejectWithValue }) => {
    try {

      const {data} = await getMealsReq();
      console.log("data", data);

      return data
    } 
    catch (error) {
      return rejectWithValue('Something get wrooong');
    }
  },
);
   
export const postMeals = createAsyncThunk(
  'meals/postMeals',
  async(payload, { dispatch,  rejectWithValue, getState}) => {
   try {
     const token = getState().meals.token
      await postMealsReq(payload, token)
      return dispatch(getMeals())
   } 
   catch (error) {
     return rejectWithValue("wrong")
   }
  }
)

export const deleteMeals = createAsyncThunk(
  'meals/deleteMeals', 
  async(id, {getState, rejectWithValue}) =>{
    try {
      const token = getState().meals.token
     await deleteMealsReq(id, token)

    } catch (error) {
      return rejectWithValue("Wrong")
    }
  }
)
