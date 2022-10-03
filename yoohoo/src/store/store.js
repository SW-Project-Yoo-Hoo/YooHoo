import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import { shopItemSlice } from "./modules/shopItem";
import { shopListReducer } from "./modules/shopList";

const rootReducer = combineReducers({
  shopListReducer: shopListReducer.reducer,
  shopItemSlice: shopItemSlice.reducer,
});

export default configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
