import DrinksList from '../../components/DrinksList/DrinksList';
import DrinksSearch from 'components/DrinksSearch/DrinksSearch';
import Paginator from 'components/Paginator/Paginator';
import { ThemeButton } from 'components/ThemeButton/ThemeButton';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCocktailsByCategoryThunk } from 'redux/Cocktails/cocktailsOperations';

const TestPage = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const category = encodeURIComponent('Cocktail');
  useEffect(() => {
    dispatch(getCocktailsByCategoryThunk(category));
  }, [dispatch, category]);

  return (
    <>
      <ThemeButton {...props} />
    </>
  );
};

export default TestPage;
