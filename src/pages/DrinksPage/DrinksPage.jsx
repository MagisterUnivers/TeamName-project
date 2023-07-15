import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import DrinksList from '../../components/DrinksList/DrinksList';
import DrinksSearch from 'components/DrinksSearch/DrinksSearch';
import Paginator from 'components/Paginator/Paginator';
import { getCocktailsByCategoryThunk } from 'redux/Cocktails/cocktailsOperations';
import MainPageTitle from 'components/MainPageTitle/MainPageTitle';

const DrinksPage = () => {
  const dispatch = useDispatch();
  const category = encodeURIComponent('Cocktail');
  useEffect(() => {
    dispatch(getCocktailsByCategoryThunk(category));
  }, [dispatch, category]);

  return (
    <>
      <MainPageTitle title={'Drinks'} />
      <DrinksSearch />
      <DrinksList categoryDefault={category} />
      <Paginator />
    </>
  );
};

export default DrinksPage;
