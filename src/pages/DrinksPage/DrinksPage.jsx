import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { Paginator, DrinksSearch, DrinksList, MainPageTitle } from 'components';
import {
  getCategoriesListThunk,
  getCocktailsByCategoryThunk,
  getIngredientsListThunk,
} from 'redux/Cocktails/cocktailsOperations';
import { setChosenCategory } from 'redux/Cocktails/cocktailsSlice';
import { selectCategories, selectIngredients } from 'redux/selectors';

const DrinksPage = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  dispatch(setChosenCategory(categoryName));

  const ingredientsList = useSelector(selectIngredients);
  const categoriesList = useSelector(selectCategories);

  useEffect(() => {
    if (categoriesList.length !== 0) return;
    dispatch(getCategoriesListThunk());
  }, [dispatch, categoriesList]);

  useEffect(() => {
    if (ingredientsList.length !== 0) return;
    dispatch(getIngredientsListThunk());
  }, [dispatch, ingredientsList]);

  useEffect(() => {
    dispatch(getCocktailsByCategoryThunk(categoryName));
  }, [dispatch, categoryName]);

  return (
    <>
      <MainPageTitle title={'Drinks'} />
      <DrinksSearch categoryName={categoryName} />
      <DrinksList />
      <Paginator />
    </>
  );
};

export default DrinksPage;
