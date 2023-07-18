import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken } from 'redux/Auth/authOperations';
import { selectAuthAccessToken } from 'redux/selectors';
import { instance } from 'api/instance';
import Notiflix from 'notiflix';

// Cocktails

export const getCategoriesListThunk = createAsyncThunk(
  '@@cocktails/categoriesList',
  async (_, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    // if (!token) {
    //   return rejectWithValue();
    // }
   
    try {
      setToken(token);
      const res = await instance.get('recipes/category-list');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getCocktailsByCategoryThunk = createAsyncThunk(
  '@@cocktails/byCategory',
  async (category, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    if (!token) {
      return rejectWithValue();
    }
    setToken(token);
    try {
      const res = await instance.get(`recipes/${encodeURIComponent(category)}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getCocktailByIdThunk = createAsyncThunk(
  '@@cocktails/byId',
  async (id, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    if (!token) {
      return rejectWithValue();
    }
    setToken(token);
    try {
      const res = await instance.get(`recipes/id/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

// Search

export const searchAllDrinksThunk = createAsyncThunk(
  '@@cocktails/search',
  async ({ search, page }, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    if (!token) {
      return rejectWithValue();
    }
    setToken(token);
    try {
      const params = {};
      search.chosenCategory && (params.category = search.chosenCategory);
      search.chosenIngredient && (params.ingredient = search.chosenIngredient);
      search.query && (params.query = search.query);
      const res = await instance.get('search', {
        params,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

//Ingredients

export const getIngredientsListThunk = createAsyncThunk(
  '@@cocktails/ingredientsList',
  async (_, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    // if (!token) {
    //   return rejectWithValue();
    // }

    try {
      setToken(token);
      const res = await instance.get('ingredients/list');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

//Glasses

export const getAllGlassesThunk = createAsyncThunk(
  '@@cocktails/glassesList',
  async (_, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    if (!token) {
      return rejectWithValue();
    }
    setToken(token);
    try {
      const res = await instance.get('glass');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

// Drinks

export const getCocktailsByFourCategoryThunk = createAsyncThunk(
  '@@cocktails/category',
  async (_, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    if (!token) {
      return rejectWithValue();
    }
    try {
      setToken(token);
      const res = await instance.get('recipes/main-page');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

// Own
export const addRecipeThunk = createAsyncThunk(
  '@@cocktails/addRecipe',
  async (data, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    if (!token) {
      return rejectWithValue();
    }
    setToken(token);
    try {
      let res = null;
      if (data.get('drinkThumb')) {
        res = await instance.post('own', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        res = await instance.post('own', data);
      }

      Notiflix.Notify.success('Recipe added to collection successfully');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getAllOwnDrinksThunk = createAsyncThunk(
  '@@cocktails/ownCocktails',
  async (_, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    if (!token) {
      return rejectWithValue();
    }
    setToken(token);
    try {
      const res = await instance.get('own');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

// Favorites

export const addToFavoriteThunk = createAsyncThunk(
  '@@cocktails/favorite',
  async (id, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    if (!token) {
      return rejectWithValue();
    }
    setToken(token);
    try {
      const res = await instance.post(`/favorite/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const removeFromFavoriteThunk = createAsyncThunk(
  '@@cocktails/favorite',
  async (id, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    if (!token) {
      return rejectWithValue();
    }
    setToken(token);
    try {
      const res = await instance.delete(`/favorite/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

// Popular
