import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DrinksList from '../../components/DrinksList/DrinksList';
import DrinksSearch from 'components/DrinksSearch/DrinksSearch';
import Paginator from 'components/Paginator/Paginator';
import {
  getAllGlassesThunk,
  getCategoriesListThunk,
  getCocktailsByCategoryThunk,
  getIngredientsListThunk,
  searchAllDrinksThunk,
} from 'redux/Cocktails/cocktailsOperations';
import {MainPageTitle} from 'components';
import { useParams } from 'react-router';
import { setChosenCategory } from 'redux/Cocktails/cocktailsSlice';
import { selectPage, selectSearch } from 'redux/selectors';

const DrinksPage = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  dispatch(setChosenCategory(categoryName));
  const page = useSelector(selectPage);
  const search = useSelector(selectSearch);
  if (!categoryName) {
    dispatch(setChosenCategory('Cocktail'));
  }
  useEffect(() => {
    dispatch(getCocktailsByCategoryThunk(categoryName));
  }, [dispatch, categoryName]);
  useEffect(() => {
    dispatch(getCategoriesListThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getIngredientsListThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllGlassesThunk());
  }, [dispatch]);

  useEffect(() => {
    // if (search.query || search.chosenCategory || search.chosenIngredient||)
    dispatch(searchAllDrinksThunk({ search, page }));
  }, [dispatch, search, page]);

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
