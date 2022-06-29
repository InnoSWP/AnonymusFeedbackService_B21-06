import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
// import UserServices from "../../services/user.services";
// import AuthServices from "../../services/auth.services";
import { setLoading } from "./AppSlice";
import jwt_decode from "jwt-decode";


export interface IRole {
  id: number;
  name: string;
  description: string;
}

export interface IUser {
  id: number;
  email: string;
  role: IRole[];
}

export interface CounterState {
  value: number;
  isAuth: boolean;
  user: IUser;
}

const initialState: CounterState = {
  value: 0,
  isAuth: false,
  user: {} as IUser,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.isAuth = true
      state.user = jwt_decode(action.payload)
    },
    clearUser:(state, action) => {
      localStorage.removeItem('token')
      state.isAuth = false
      state.user = {} as IUser
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(isLogged.fulfilled, (state, action) => {});
  }
});

export const { setUser, clearUser } = userReducer.actions;

export default userReducer.reducer;
