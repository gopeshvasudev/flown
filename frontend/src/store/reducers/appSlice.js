import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSigninPasswordViewable: false,
  isSignupPasswordViewable: false,
  isSignin: true,
  isDropdownVisible: false,
  isSettingsSidebarOpened: true,
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

    toggleIsDropdownVisible(state) {
      state.isDropdownVisible = !state.isDropdownVisible;
    },

    closeDropdownMenu(state) {
      state.isDropdownVisible = false;
    },

    toggleSettingsSidebar(state) {
      state.isSettingsSidebarOpened = !state.isSettingsSidebarOpened;
    },
  },
});

export default appSlice.reducer;
export const {
  toggleIsSigninPasswordViewable,
  toggleIsSignupPasswordViewable,
  toggleIsSignin,
  toggleIsDropdownVisible,
  closeDropdownMenu,
  toggleSettingsSidebar,
} = appSlice.actions;
