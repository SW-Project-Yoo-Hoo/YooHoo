import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const shopListSlice = createAsyncThunk("GET_LIST", async () => {
  const res = await axios.get("/posts");
  return res.data.data;
});

export const shopListReducer = createSlice({
  name: "shopList",
  initialState: [],
  reducers: {},
  extraReducers: {
    [shopListSlice.fulfilled]: (state, { payload }) => [...payload],
  },
});
