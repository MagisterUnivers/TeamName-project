import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUserThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
  registrationThunk,
  verifyThunk,
} from './authOperations.js';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const initialState = {
  user: { name: '', email: '', id: '' },
  accessToken: null,
  online: false,
  loading: false,
  isClicked: false,
};

const authSlice = createSlice({
  name: '@@auth',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
    handleEyeClick: state => {
      state.isClicked = !state.isClicked;
      const openPassword = () => {
        const input = document.querySelector('#password');
        input.type = input.type === 'password' ? 'text' : 'password';
        // input.addEventListener('keyup', () => {
        //   if (input.type === 'password') {
        //     const dummyText = Array(input.value.length).fill('*').join('');
        //     input.innerHTML = dummyText;
        //   }
        // });
      };
      openPassword();
    },
  },
  extraReducers: {
    [registrationThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },
    [registrationThunk.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
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
      state.user = payload?.user;
      state.accessToken = payload?.token;

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
      state.accessToken = '';
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
      if (payload.token === null) state.online = false;
      state.loading = false;
      state.accessToken = payload.token;
      Loading.remove();
    },
    [refreshThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
    [verifyThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your email...');
    },
    [verifyThunk.fulfilled]: (state, { payload }) => {
      state.online = true;
      state.loading = false;
      state.accessToken = payload.token;
      Loading.remove();
    },
    [verifyThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
    [getCurrentUserThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your email...');
    },
    [getCurrentUserThunk.fulfilled]: (state, { payload }) => {
      state.online = true;
      state.loading = false;
      state.user.id = payload._id;
      Loading.remove();
    },
    [getCurrentUserThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
  },
});

export const authReducer = authSlice.reducer;
export const { clearError, handleEyeClick } = authSlice.actions;
