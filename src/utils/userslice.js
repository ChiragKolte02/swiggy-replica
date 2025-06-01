import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        user: "chirag",
  token: "chirag",
  isAuthenticated: false,
//   loading: false,
  error: null,
    },
    reducers:{
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    isLoginSuccess(state, action) {
        // console.log("data incoming: " + action.payload.username)
        if(state.user == action.payload.username && state.token == action.payload.password){
            state.isAuthenticated = true;
            // state.loading = false;
        }
        console.log(state.isAuthenticated)
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = "chirag",
      state.token = "chirag";
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    }
  }
    
})
export const{loginFailure,logout,isLoginSuccess,loginStart}= userSlice.actions
export default userSlice.reducer