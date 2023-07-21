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
  getAllFavoriteDrinksThunk,
  addToFavoriteThunk,
  removeFromFavoriteThunk,
  removeFromFavoritePageThunk,
  getPopularThunk,
} from './cocktailsOperations.js';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const initialState = {
  cocktails: [],
  favorites: [],
  own: [],
  popular: [],
  categories: [],
  ingredients: [],
  glasses: [],
  searchResults: [],
  search: { query: '', chosenCategory: '', chosenIngredient: '' },
  totalHits: null,
  page: 1,
  loading: false,
  backup: [],
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
      state.searchResults = payload.cocktails;
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
      Loading.hourglass('We are validating your data...');
    },
    [getCocktailByIdThunk.fulfilled]: (state, { payload }) => {
      state.favorites = payload;
      state.backup = payload;

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
      // console.log(payload);
      state.searchResults = payload.cocktails;
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
      state.own = [payload, ...state.own];
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
      state.own = payload.cocktails;
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

    [getAllFavoriteDrinksThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },
    [getAllFavoriteDrinksThunk.fulfilled]: (state, { payload }) => {
      state.favorites = payload.cocktails;
      state.totalHits = payload.totalHits;
      state.page = payload.page;
      state.loading = false;
      Loading.remove();
    },
    [getAllFavoriteDrinksThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },

    [addToFavoriteThunk.pending]: (state, { payload }) => {
      state.loading = true;
      state.Loading.hourglass('We are validating your data...');
    },
    [addToFavoriteThunk.fulfilled]: (state, { payload }) => {
      // state.cocktails = [];
      // state.cocktails.push(payload);
      // console.log(payload);
      state.favorites = payload;
      state.backup = payload;
      state.loading = false;
      Loading.remove();
    },
    [addToFavoriteThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
    [removeFromFavoriteThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },
    [removeFromFavoriteThunk.fulfilled]: (state, { payload }) => {
      console.log(Array.isArray(state.favorites));
      if(Array.isArray(state.favorites)){
        console.log(111);
        state.favorites = state.favorites.filter((el)=>{ return el._id !== payload.cocktails._id})
      }else{
        state.favorites = payload.cocktails;
      }
      // console.log(payload);
      state.loading = false;
      Loading.remove();
    },
    [removeFromFavoriteThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },

    // Popular

    [getPopularThunk.pending]: (state, { payload }) => {
      state.loading = true;
      Loading.hourglass('We are validating your data...');
    },
    [getPopularThunk.fulfilled]: (state, { payload }) => {
      state.popular = payload;
      state.loading = false;
      Loading.remove();
    },
    [getPopularThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      Loading.remove();
    },
  },
});

export const { setQuery, setChosenCategory, setChosenIngredient, setPage } =
  cocktailsSlice.actions;
export const cocktailsReducer = cocktailsSlice.reducer;
