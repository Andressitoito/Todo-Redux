import { createSlice } from "@reduxjs/toolkit";

const emptyAuthState = {
 jwt: null,
 user: null
}

const authSlice = createSlice({
 name: 'auth',
 initialState: emptyAuthState,
 reducers: {
  login: (state, action) => {

   return action.payload
  },
  register: () => { },
  logout: () => { 
   return emptyAuthState
  },
 }
})

export const { login, register, logout } = authSlice.actions

export default authSlice.reducer