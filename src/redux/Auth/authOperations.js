import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

//defaultURL
// axios.defaults.baseURL = 'https://cocktails-backend-cwrh.onrender.com/';

export const instance = axios.create({
  // baseURL: 'https://cocktails-backend-cwrh.onrender.com/',
  baseURL: 'http://localhost:3001/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
const clearToken = token => {
  instance.defaults.headers.common['Authorization'] = ``;
};

// const setToken = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
// const clearToken = () => {
//   axios.defaults.headers.common.Authorization = ``;
// };

export const registrationThunk = createAsyncThunk(
  '@@auth/registration',
  async credentials => {
    try {
      const res = await instance.post('users/register', credentials);
      Notiflix.Report.success('We sent you an email.')
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
      const res = await instance.post('user/login', credentials);
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
    await instance.get('user/logout');
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
      const res = await instance.post('user/refresh');
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      Notiflix.Notify.failure('Respond from server is ' + errorMessage);
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const verifyThunk = createAsyncThunk(
  '@@auth/verify',
  async verificationToken => {
    try {
      const res = await axios.get(`http://localhost:3001/users/verify/${verificationToken}`);
      console.log(res);
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
)