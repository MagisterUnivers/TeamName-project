import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'api/instance';
import Notiflix from 'notiflix';
import { selectAuthAccessToken, selectUserLoading } from 'redux/selectors';

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
export const clearToken = token => {
  instance.defaults.headers.common['Authorization'] = ``;
};

export const registrationThunk = createAsyncThunk(
  '@@auth/registration',
  async credentials => {
    try {
      const res = await instance.post('users/register', credentials);
      Notiflix.Report.success('We sent you an email.');
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
      return res.data;
    } catch (error) {
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

export const logoutThunk = createAsyncThunk('@@auth/logout', async () => {
  try {
    const res = await instance.post('users/logout');
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    clearToken();
    return res;
  } catch (error) {
    const errorMessage = error.response.data.message;
    Notiflix.Notify.failure('Respond from server is ' + errorMessage);
  }
});

export const refreshThunk = createAsyncThunk(
  '@@auth/refresh',
  async (_, thunkAPI) => {
    const refreshToken = selectAuthAccessToken(thunkAPI.getState());
    setToken(refreshToken);
    try {
      const res = await instance.post('users/refresh');
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      Notiflix.Notify.failure('Respond from server is ' + errorMessage);
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  '@@auth/current',
  async (_, thunkAPI) => {
    try {
      const res = await instance.get('users/current');
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      Notiflix.Notify.failure('Respond from server is ' + errorMessage);
    }
  }
);

export const verifyThunk = createAsyncThunk(
  '@@auth/verify',
  async verificationToken => {
    try {
      const res = await instance.get(`/users/verify/${verificationToken}`);
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
    }
  }
);

export const setSubscription = async credentials => {
  const res = await instance.patch('users/subscribe', credentials);
  return res.data;
};
