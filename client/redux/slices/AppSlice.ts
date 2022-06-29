import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";

export interface appState {
    isLoading: boolean;
    isFetch: boolean;
}

const initialState: appState = {
    isLoading: true,
    isFetch: false
};

export const appReducer = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setIsFetch: (state, action: PayloadAction<boolean>) => {
            state.isFetch = action.payload;
        }
    },
    extraReducers: (builder) => {}
});
export const { setLoading, setIsFetch } = appReducer.actions;

export default appReducer.reducer;
