import { createSlice } from "@reduxjs/toolkit";
import { UserRoles } from "../../lib/contants/common";
import { signIn, signOut, signUp } from "./authThunk";

const initialState = {
 isAuthorized: false,
 token: '',
 user: {
    name: "",
    email: "",
    role: UserRoles.GUEST,
 } 
}
export const authSlice = createSlice({
 name: 'auth',
 initialState,
 extraReducers: (builder) => {
  builder.addCase(signUp.fulfilled, (state, {payload}) => {
   state.isAuthorized = true
   state.token =  payload.token
   state.user = {
      name: payload.user.name,
      email: payload.user.email,
      role: payload.user.role
   }
  })
  builder.addCase(signIn.fulfilled, (state, {payload}) => {
   state.isAuthorized = true
   state.token = payload.token
   state.user = {
      name: payload.user.name,
      email: payload.user.email,
      role: payload.user.role
   }
  })
  builder.addCase(signOut.fulfilled, (state) => {
   state.isAuthorized = false
   state.token = ''
   state.user = {
      name: "",
      email: "",
      role: UserRoles.GUEST,
   }
  })
 }
})
export const authActions = authSlice.actions