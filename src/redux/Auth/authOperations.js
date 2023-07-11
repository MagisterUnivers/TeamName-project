import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

//defaultURL
axios.defaults.baseURL = 'https://goose-tracker-backend.p.goit.global/';

// axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export const registrationThunk = createAsyncThunk(
  '@@auth/registration',
  async credentials => {
    try {
      const res = await axios.post('user/register', credentials);
      // setToken(res.data);
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      Notiflix.Notify.failure('Respond from server is ' + errorMessage);

      setTimeout(() => {
        if (error) {
          Notiflix.Report.warning(
            'Loading took more than 5 seconds',
            'Loading seems stuck, or there was a server error. Please, check your data, and then try to "Log In" again.',
            'GOT IT',
            () => {
              window.location.reload();
            }
          );
        }
      }, 5000);
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginThunk = createAsyncThunk(
  '@@auth/login',
  async credentials => {
    try {
      const res = await axios.post('user/login', credentials);
      setToken(res.data.data.accessToken);
      return res.data;
    } catch (error) {
      setTimeout(() => {
        if (error) {
          Notiflix.Report.warning(
            'Loading took more than 5 seconds',
            'Loading seems stuck, or there was a server error. Please, check your data, and then try to "Log In" again.',
            'GOT IT',
            () => {
              window.location.reload();
            }
          );
        }
      }, 5000);

      const errorMessage = error.response.data.message;
      Notiflix.Notify.failure('Respond from server is ' + errorMessage);
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('@@auth/logout', async _ => {
  try {
    await axios.get('user/logout');
    clearToken();
  } catch (error) {
    const errorMessage = error.response.data.message;
    Notiflix.Notify.failure('Respond from server is ' + errorMessage);
  }
});

export const refreshThunk = createAsyncThunk(
  '@@auth/refresh',
  async (_, thunkAPI) => {
    const refreshToken = thunkAPI.getState().auth.data.refreshToken;
    try {
      setToken(refreshToken);
      const res = await axios.post('user/refresh');
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      Notiflix.Notify.failure('Respond from server is ' + errorMessage);
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);
