import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sentLetters: [],
  receivedLetters: [],
};

const letterSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    setSentLetters(state, action) {
      state.sentLetters = action.payload;
    },

    setReceivedLetters(state, action) {
      state.receivedLetters = action.payload;
    },

    clearLetters(state) {
      state.sentLetters = [];
      state.receivedLetters = [];
    },
  },
});

export default letterSlice.reducer;
export const { setSentLetters, setReceivedLetters, clearLetters } =
  letterSlice.actions;
