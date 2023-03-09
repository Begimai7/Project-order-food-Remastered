import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMealsReq } from "../../api/mealsServive";

const initialState = {
 meals: [],
 isLoading: false,
 error: ''
}

export const mealsSlice = createSlice({
 name: 'meals',
 initialState,
 extraReducers: (builder) => {
  builder.addCase(getMeals.fulfilled, (state, action) => {
   state.meals = action.payload
   state.isLoading = false
   state.error = ''
  })
  builder.addCase(getMeals.pending, (state, action) =>{
   state.isLoading = true
  })
  builder.addCase(getMeals.rejected, (state, action) => {
   state.error = action.payload
  })
 }
})

export const getMeals = createAsyncThunk(
 'meals/getMeals',
 async ({rejectWithValue}) => {
  try{
   const {data} = await getMealsReq()
   
   return data
  }catch(error){
   return rejectWithValue("Wrooong get meals request!!!")
  }
 }
)