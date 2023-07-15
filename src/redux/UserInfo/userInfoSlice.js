import { createSlice } from "@reduxjs/toolkit";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { updateThemeThunk } from "./userOperations";

const initialState = {
    theme: 'dark',
}

const userInfoSlice = createSlice({
    name: '@@userInfo',
    initialState,
    reducers: {
        setTheme: state => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        }
    }, extraReducers: {
        [updateThemeThunk.pending]: (state, { payload }) => {
            state.loading = true;
            Loading.hourglass('We are validating your data...');
        },
        [updateThemeThunk.fulfilled]: (state, { payload }) => {
            state.theme = payload;
            state.loading = false;
            Loading.remove();
        },
        [updateThemeThunk.rejected]: (state, { payload }) => {
            state.error = payload;
            // state.loading = false;
            Loading.remove();
        },
    }
}
)

export const userInfoReducer = userInfoSlice.reducer;
export const { setTheme } = userInfoSlice.actions;