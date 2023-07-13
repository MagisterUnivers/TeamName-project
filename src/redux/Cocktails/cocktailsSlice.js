import { createSlice } from '@reduxjs/toolkit';
import { getCocktailsByCategoryThunk } from './cocktailsOperations.js';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const initialState = {
  cocktails: [{ drink: '', category: '', drinkThumb: '' }],
  categoryList: [
    'Cocktail',
    'Ordinary Drink',
    'Shake',
    'Other/Unknown',
    'Cocoa',
    'Shot',
    'Coffee/Tea',
    'Homemade Liqueur',
    'Punch/Party Drink',
    'Beer',
    'Soft Drink',
  ],
  glassList: [
    'Highball glass',
    'Cocktail glass',
    'Old-fashioned glass',
    'Whiskey Glass',
    'Collins glass',
    'Pousse cafe glass',
    'Champagne flute',
    'Whiskey sour glass',
    'Cordial glass',
    'Brandy snifter',
    'White wine glass',
    'Nick and Nora Glass',
    'Hurricane glass',
    'Coffee mug',
    'Shot glass',
    'Jar',
    'Irish coffee cup',
    'Punch bowl',
    'Pitcher',
    'Pint glass',
    'Copper Mug',
    'Wine Glass',
    'Beer mug',
    'Margarita/Coupette glass',
    'Beer pilsner',
    'Beer Glass',
    'Parfait glass',
    'Mason jar',
    'Margarita glass',
    'Martini Glass',
    'Balloon Glass',
    'Coupe Glass',
  ],
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
