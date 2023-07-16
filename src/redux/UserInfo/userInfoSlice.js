import { createSlice } from '@reduxjs/toolkit';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { updateThemeThunk } from './userOperations';

const initialState = {
  user: { name: '', email: '' },
  avatarURL: '',
  theme: 'dark',
};

const userInfoSlice = createSlice({
  name: '@@userInfo',
  initialState,
  reducers: {},
  extraReducers: {
    [updateThemeThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },
    [updateThemeThunk.fulfilled]: (state, { payload }) => {
      // crerate algorithm for toggleTheme
      // create less fetch for theme

      state.theme = payload.theme;
      state.loading = false;
      Loading.remove();
    },
    [updateThemeThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      // state.loading = false;
      Loading.remove();
    },
  },
});

export const userInfoReducer = userInfoSlice.reducer;
export const { setTheme } = userInfoSlice.actions;
