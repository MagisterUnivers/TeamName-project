import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import DrinksList from '../../components/DrinksList/DrinksList';
import DrinksSearch from 'components/DrinksSearch/DrinksSearch';
import Paginator from 'components/Paginator/Paginator';
import {
  getCategoriesListThunk,
  getCocktailsByCategoryThunk,
  getIngredientsListThunk,
  searchAllDrinksThunk,
} from 'redux/Cocktails/cocktailsOperations';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import { setChosenCategory } from 'redux/Cocktails/cocktailsSlice';
import {
  selectCategories,
  selectIngredients,
  selectPage,
  selectSearch,
} from 'redux/selectors';

const DrinksPage = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  dispatch(setChosenCategory(categoryName));

  const ingredientsList = useSelector(selectIngredients);
  const categoriesList = useSelector(selectCategories);

  if (categoriesList.length === 0) {
    dispatch(getCategoriesListThunk());
  }
  if (ingredientsList.length === 0) {
    dispatch(getIngredientsListThunk());
  }
  // if (!categoryName) {
  //   dispatch(setChosenCategory('Cocktail'));
  // }
  useEffect(() => {
    dispatch(getCocktailsByCategoryThunk(categoryName));
  }, [dispatch, categoryName]);

  return (
    <>
      <MainPageTitle title={'Drinks'} />
      <DrinksSearch categoryName={categoryName} />
      <DrinksList categoryName={categoryName} />
      <Paginator />
    </>
  );
};

export default DrinksPage;
