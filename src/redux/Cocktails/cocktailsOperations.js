import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/Auth/authOperations';

// Cocktails

export const getCategoriesListThunk = createAsyncThunk(
  '@@cocktails/categoriesList',
  async (_, { rejectWithValue }) => {
    try {
      const res = await instance.get('api/recipes/category-list');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getCocktailsByCategoryThunk = createAsyncThunk(
  '@@cocktails/byCategory',
  async (category, { rejectWithValue }) => {
    try {
      const res = await instance.get(
        `api/recipes/${encodeURIComponent(category)}`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getCocktailByIdThunk = createAsyncThunk(
  '@@cocktails/byId',
  async (id, { rejectWithValue }) => {
    try {
      const res = await instance.get(`api/recipes/id/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

// Search

export const searchAllDrinksThunk = createAsyncThunk(
  '@@cocktails/search',
  async (search, { rejectWithValue }) => {
    try {
      const params = {};
      search.chosenCategory && (params.category = search.chosenCategory);
      search.chosenIngredient && (params.ingredient = search.chosenIngredient);
      search.query && (params.query = search.query);
      const res = await instance.get('api/search', {
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
  async (_, { rejectWithValue }) => {
    try {
      const res = await instance.get('api/ingredients/list');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

//Glasses

export const getAllGlassesThunk = createAsyncThunk(
  '@@cocktails/glassesList',
  async (_, { rejectWithValue }) => {
    try {
      const res = await instance.get('api/glass');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

// Drinks

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

// Own

// Favorites

// Popular
