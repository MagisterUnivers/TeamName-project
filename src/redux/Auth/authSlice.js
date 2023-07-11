import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registrationThunk,
} from './authOperations.js';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const initialState = {
  user: { name: '', email: '' },
  data: {
    accessToken: null,
    refreshToken: null,
  },
  online: false,
  loading: true,
};

const authSlice = createSlice({
  name: '@@auth',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: {
    [registrationThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },
    [registrationThunk.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.data = payload.data;
      state.online = true;
      state.loading = false;
      Loading.remove();
    },
    [registrationThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      // state.loading = false;
      Loading.remove();
    },
    [loginThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('Log In...');
    },
    [loginThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      // state.loading = false;
      Loading.remove();
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.user = { id: payload.id, name: payload.name, email: payload.email };
      state.data = payload.data;

      state.online = true;
      state.loading = false;
      state.error = null;
      Loading.remove();
    },
    [logoutThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.pulse('Log Out...');
    },
    [logoutThunk.fulfilled]: (state, { payload }) => {
      state.user = { name: '', email: '' };
      state.data = { accessToken: '', refreshToken: '' };
      state.online = false;
      state.loading = false;
      state.error = null;
      Loading.remove();
    },
    [logoutThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
    [refreshThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.dots('User data is refreshing...');
    },

    [refreshThunk.fulfilled]: (state, { payload }) => {
      state.online = true;
      state.loading = false;
      state.data = payload.data;
      Loading.remove();
    },
    [refreshThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
  },
});

export const authReducer = authSlice.reducer;
export const { clearError } = authSlice.actions;
