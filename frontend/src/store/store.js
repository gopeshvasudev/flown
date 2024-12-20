import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/appSlice";
import userReducer from "./reducers/userSlice";
import tokenReducer from "./reducers/tokenSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    token: tokenReducer,
  },
});

export default store;
