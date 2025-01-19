import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./reducers/appSlice";
import userReducer from "./reducers/userSlice";
import tokenReducer from "./reducers/tokenSlice";
import letterReducer from "./reducers/letterSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    token: tokenReducer,
    letter: letterReducer,
  },
});

export default store;
