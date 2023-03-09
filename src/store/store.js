import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./basket/BasketSlice";
import { mealsSlice } from "./meal/mealSlice";
import { themeSlice } from "./theme/themeSlice";

export const store = configureStore({
 reducer: {
 [themeSlice.name]: themeSlice.reducer,
 [basketSlice.name]: basketSlice.reducer,
 [mealsSlice.name]: mealsSlice.reducer
 }
})