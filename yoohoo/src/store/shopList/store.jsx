import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import { shopListReducer } from "./shopListReducer";

const reducer = combineReducers({ shopListReducer: shopListReducer.reducer });

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
