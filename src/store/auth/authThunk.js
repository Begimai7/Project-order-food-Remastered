import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignInReq, SignUpReq } from "../../api/authService";
import { STORAGE_KEYS } from "../../lib/contants/common";


export const signUp = createAsyncThunk(
 'auth/signup',
  async(payload, {rejectWithValue}) => {
   try {
    const {data} = await SignUpReq(payload)
    const userData = data.data

    localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(userData))
    
    return userData
   } 
   catch (error) {
    return rejectWithValue('signUp Errrroor')
   }
  }
)

export const signIn = createAsyncThunk(
  'auth/signIn',
  async  (userData, {rejectWithValue}) => {
    try {
       const { data } = await SignInReq(userData)
       localStorage(STORAGE_KEYS.AUTH, JSON.stringify(data.data))
       return data.data
    } 
    catch (error) {
      return rejectWithValue("Incorrect email or password")
    }
   
  }
)

export const signOut = createAsyncThunk(
  'auth/signout',
  async() => {
   return localStorage.removeItem(STORAGE_KEYS.AUTH)
  }
)