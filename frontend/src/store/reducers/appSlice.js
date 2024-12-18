import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSigninPasswordViewable: false,
  isSignupPasswordViewable: false,
  isSignin: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleIsSigninPasswordViewable(state, action) {
      state.isSigninPasswordViewable = !state.isSigninPasswordViewable;
    },

    toggleIsSignupPasswordViewable(state) {
      state.isSignupPasswordViewable = !state.isSignupPasswordViewable;
    },

    toggleIsSignin(state) {
      state.isSignin = !state.isSignin;
    },
  },
});

export default appSlice.reducer;
export const {
  toggleIsSigninPasswordViewable,
  toggleIsSignupPasswordViewable,
  toggleIsSignin,
} = appSlice.actions;
