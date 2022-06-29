import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
// import UserServices from "../../services/user.services";
// import AuthServices from "../../services/auth.services";
import { setLoading } from "./AppSlice";

export interface CounterState {
  value: number;
  isAuth: boolean;
}

const initialState: CounterState = {
  value: 0,
  isAuth: false
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(isLogged.fulfilled, (state, action) => {});
  }
});

export const {} = userReducer.actions;

export default userReducer.reducer;
