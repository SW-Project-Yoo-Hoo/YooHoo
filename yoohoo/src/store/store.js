import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import { shopItemReducer } from "./modules/shopItem";
import { shopListReducer } from "./modules/shopList";

const rootReducer = combineReducers({
  shopListReducer: shopListReducer.reducer,
  shopItemReducer: shopItemReducer.reducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
