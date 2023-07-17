import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DrinksList from '../../components/DrinksList/DrinksList';
import DrinksSearch from 'components/DrinksSearch/DrinksSearch';
import Paginator from 'components/Paginator/Paginator';
import { getCocktailsByCategoryThunk } from 'redux/Cocktails/cocktailsOperations';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';
import { useParams } from 'react-router';
import { setChosenCategory } from 'redux/Cocktails/cocktailsSlice';

const DrinksPage = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  dispatch(setChosenCategory(categoryName));

  if (!categoryName) {
    dispatch(setChosenCategory('Cocktail'));
  }
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
