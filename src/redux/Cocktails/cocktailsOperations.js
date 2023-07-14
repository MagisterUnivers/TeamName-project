import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/Auth/authOperations';

export const getCocktailsByCategoryThunk = createAsyncThunk(
  '@@cocktails/category',
  async (category, { rejectWithValue }) => {
    try {
      const res = await instance.get('api/recipes/' + category);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getCocktailsByFourCategoryThunk = createAsyncThunk(
  '@@cocktails/category',
  async (_, { rejectWithValue }) => {
    try {
      const res = await instance.get('recipes/main-page/');
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
