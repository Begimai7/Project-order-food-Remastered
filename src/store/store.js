import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { basketSlice } from "./basket/BasketSlice";
import { mealsSlice } from "./meals/mealsSlice";
import { themeSlice } from "./theme/themeSlice";

export const store = configureStore({
 reducer: {
 [themeSlice.name]: themeSlice.reducer,
 [basketSlice.name]: basketSlice.reducer,
 [authSlice.name]: authSlice.reducer, 
 [mealsSlice.name]: mealsSlice.reducer
 }
})