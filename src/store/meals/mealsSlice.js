import { createSlice } from "@reduxjs/toolkit";
import { getMeals,  } from "./mealsThunk";

const initialState = {
 meals: [],
 isLoading: false,
 error: '',
 token: ''
}

export const mealsSlice = createSlice({
 name: 'meals',
 initialState,
 extraReducers: (builder) => {
  builder.addCase(getMeals.fulfilled, (state, action) => {
   state.meals = action.payload
   state.token = action.token
   state.isLoading = false
   state.error = ''
  })
  builder.addCase(getMeals.pending, (state) =>{
   state.isLoading = true
  })
  builder.addCase(getMeals.rejected, (state, action) => {
   state.error = action.payload
  })
 }
})
