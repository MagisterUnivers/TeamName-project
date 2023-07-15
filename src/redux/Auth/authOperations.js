import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'api/instance';
import Notiflix from 'notiflix';
import { selectAuthAccessToken, selectUserLoading } from 'redux/selectors';

//defaultURL
// axios.defaults.baseURL = 'https://cocktails-backend-cwrh.onrender.com/';

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
export const clearToken = token => {
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
      Notiflix.Report.success('We sent you an email.');
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
  async (credentials, thunkAPI) => {
    const loading = selectUserLoading(thunkAPI.getState());
    try {
      const res = await instance.post('users/login', credentials);
      setToken(res.data.token);
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        if (!loading) {
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
      return thunkAPI.rejectWithValue(errorMessage);
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
    // const refreshToken = thunkAPI.getState().auth.accessToken;
    const refreshToken = selectAuthAccessToken(thunkAPI.getState());
    setToken(refreshToken);
    try {
      const res = await instance.post('users/refresh');
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
      const res = await instance.get(`/users/verify/${verificationToken}`);
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
);
