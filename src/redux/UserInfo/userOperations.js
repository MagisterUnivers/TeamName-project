import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'api/instance';
import Notiflix from 'notiflix';

export const updateThemeThunk = createAsyncThunk(
  '@@userInfo/theme',
  async (payload, { rejectWithValue }) => {
    try {
      // console.log(payload);
      const res = await instance.patch('users/theme', payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  '@@userInfo/update',
  async (data, { rejectWithValue }) => {
    try {
      let res = null;
      if(data.get('avatarURL'))
    {
     res = await instance.patch('users/update', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
        }
else {res = await instance.patch('users/update', data)
}
Notiflix.Notify.success('User inform was updated');
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      Notiflix.Notify.failure('Respond from server is ' + errorMessage);
      return rejectWithValue(error.response.status);
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  '@@userInfo/current',
  async (_, { rejectWithValue }) => {
    try {
      // console.log(token);
      const res = await instance.get('users/current');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
