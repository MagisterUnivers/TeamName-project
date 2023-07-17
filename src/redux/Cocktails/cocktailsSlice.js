import { createSlice } from '@reduxjs/toolkit';
import {
  getCocktailsByCategoryThunk,
  getCocktailsByFourCategoryThunk,
  getAllGlassesThunk,
  getCategoriesListThunk,
  getCocktailByIdThunk,
  getIngredientsListThunk,
  searchAllDrinksThunk,
  addRecipeThunk,
  getAllOwnDrinksThunk,
} from './cocktailsOperations.js';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const initialState = {
  cocktails: [],
  categories: [],
  ingredients: [],
  glasses: [],
  search: { query: '', chosenCategory: '', chosenIngredient: '' },
  totalHits: null,
  page: 1,
  loading: false,
};

const cocktailsSlice = createSlice({
  name: '@@cocktails',
  initialState,
  reducers: {
    setQuery: (state, { payload }) => {
      state.search.query = payload;
    },
    setChosenCategory: (state, { payload }) => {
      state.search.chosenCategory = payload;
    },
    setChosenIngredient: (state, { payload }) => {
      state.search.chosenIngredient = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: {
    //Cocktails
    [getCategoriesListThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },
    [getCategoriesListThunk.fulfilled]: (state, { payload }) => {
      state.categories = payload;
      state.loading = false;
      Loading.remove();
    },
    [getCategoriesListThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
    [getCocktailsByCategoryThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },
    [getCocktailsByCategoryThunk.fulfilled]: (state, { payload }) => {
      state.cocktails = payload.cocktails;
      state.totalHits = payload.totalHits;
      state.page = payload.page;
      state.loading = false;
      Loading.remove();
    },
    [getCocktailsByCategoryThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
    [getCocktailByIdThunk.pending]: (state, { payload }) => {
      state.loading = true;
      // state.cocktails = [];
      Loading.hourglass('We are validating your data...');
    },
    [getCocktailByIdThunk.fulfilled]: (state, { payload }) => {
      state.cocktails = payload;
      state.loading = false;
      Loading.remove();
    },
    [getCocktailByIdThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },

    // Search
    [searchAllDrinksThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },
    [searchAllDrinksThunk.fulfilled]: (state, { payload }) => {
      state.cocktails = payload.cocktails;
      state.totalHits = payload.totalHits;
      state.page = payload.page;
      state.loading = false;
      Loading.remove();
    },
    [searchAllDrinksThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
    //Ingredients
    [getIngredientsListThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },
    [getIngredientsListThunk.fulfilled]: (state, { payload }) => {
      state.ingredients = payload;
      state.loading = false;
      Loading.remove();
    },
    [getIngredientsListThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },

    //Glasses
    [getAllGlassesThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },
    [getAllGlassesThunk.fulfilled]: (state, { payload }) => {
      state.glasses = payload;
      state.loading = false;
      Loading.remove();
    },
    [getAllGlassesThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },

    // Drinks
    [getCocktailsByFourCategoryThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },
    [getCocktailsByFourCategoryThunk.fulfilled]: (state, { payload }) => {
      state.cocktails = payload;
      state.loading = false;
      Loading.remove();
    },
    [getCocktailsByFourCategoryThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },

    // Own
    [addRecipeThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are adding your recipe...');
    },
    [addRecipeThunk.fulfilled]: (state, { payload }) => {
      state.cocktails = [...state.cocktails, payload];
      Loading.remove();
    },
    [addRecipeThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
    [getAllOwnDrinksThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },
    [getAllOwnDrinksThunk.fulfilled]: (state, { payload }) => {
      state.cocktails = payload.cocktails;
      state.totalHits = payload.totalHits;
      state.page = payload.page;
      state.loading = false;
      Loading.remove();
    },
    [getAllOwnDrinksThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
    // Favorites

    // Popular
  },
});

export const { setQuery, setChosenCategory, setChosenIngredient, setPage } =
  cocktailsSlice.actions;
export const cocktailsReducer = cocktailsSlice.reducer;
