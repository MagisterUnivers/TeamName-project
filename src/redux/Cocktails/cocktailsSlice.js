import { createSlice } from '@reduxjs/toolkit';
import { getCocktailsByCategoryThunk } from './cocktailsOperations.js';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const initialState = {
  cocktails: [{ drink: '', category: '', drinkThumb: '' }],
};

const cocktailsSlice = createSlice({
  name: '@@cocktails',
  initialState,
  reducers: {},
  extraReducers: {
    [getCocktailsByCategoryThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },
    [getCocktailsByCategoryThunk.fulfilled]: (state, { payload }) => {
      state.cocktails = payload;
      state.loading = false;
      Loading.remove();
    },
    [getCocktailsByCategoryThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
  },
});

export const cocktailsReducer = cocktailsSlice.reducer;
