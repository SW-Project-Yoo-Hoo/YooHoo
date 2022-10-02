import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const shopItemThunk = createAsyncThunk("GET_ITEM", async (id) => {
  const res = await axios.get(`/posts/${id}`);
  return res.data.data;
});

export const shopItemReducer = createSlice({
  name: "shopItem",
  initialState: [],
  reducers: {},
  extraReducers: {
    [shopItemThunk.fulfilled]: (state, action) => ({
      ...state,
      data: action.payload,
    }),

    // [shopItemThunk.fulfilled]: (state, { payload }) => [...payload],
  },
});
