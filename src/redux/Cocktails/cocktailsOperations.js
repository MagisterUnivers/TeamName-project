import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/Auth/authOperations';
import Notiflix from 'notiflix';

// Cocktails

export const getCategoriesListThunk = createAsyncThunk(
  '@@cocktails/categoriesList',
  async (_, { rejectWithValue }) => {
    try {
      const res = await instance.get('recipes/category-list');
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
        `recipes/${encodeURIComponent(category)}`
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
      const res = await instance.get(
        `recipes/id/${id}`
      );
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
  async (_, { rejectWithValue }) => {
    try {
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
  async (_, { rejectWithValue }) => {
    try {
      const res = await instance.get('glass');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

// Own
export const addRecipeThunk = createAsyncThunk(
  '@@cocktails/addRecipe',
  async (data, { rejectWithValue }) => {
    try {
      const res = await instance.post('own', data);
      Notiflix.Notify.success('Recipe added to collection successfully');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

// Favorites

// Popular
