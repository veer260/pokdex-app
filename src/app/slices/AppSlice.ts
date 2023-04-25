import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/type";
const initialState: AppTypeInitialState = {};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});
