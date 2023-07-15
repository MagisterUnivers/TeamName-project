import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import DrinksList from '../../components/DrinksList/DrinksList';
import DrinksSearch from 'components/DrinksSearch/DrinksSearch';
import Paginator from 'components/Paginator/Paginator';
import { getCocktailsByCategoryThunk } from 'redux/Cocktails/cocktailsOperations';

const TestPage = () => {
  const dispatch = useDispatch();
  const category = encodeURIComponent('Cocktail');
  useEffect(() => {
    dispatch(getCocktailsByCategoryThunk(category));
  }, [dispatch, category]);

  return (
    <>
      <h1>Drinks</h1>
      <DrinksSearch />
      <DrinksList categoryDefault={category} />
      <Paginator />
    </>
  );
};

export default TestPage;
