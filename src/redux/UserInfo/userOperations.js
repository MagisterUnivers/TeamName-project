import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'api/instance';

export const updateThemeThunk = createAsyncThunk(
  '@@userInfo/theme',
  async (payload, { rejectWithValue }) => {
    try {
      console.log(payload);
      const res = await instance.patch('users/theme', payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);


export const updateUserThunk = createAsyncThunk(
  '@@userInfo/update',
  async (payload, { rejectWithValue }) => {
    try {
      console.log(payload);
      const res = await instance.patch('users/update', payload);
      return res.data;
    } catch (error) {
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
