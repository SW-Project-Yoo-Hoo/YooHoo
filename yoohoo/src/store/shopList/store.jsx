import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import { shopListReducer } from "./shopListSlice";

const reducer = combineReducers({ shopListReducer: shopListReducer.reducer });

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
