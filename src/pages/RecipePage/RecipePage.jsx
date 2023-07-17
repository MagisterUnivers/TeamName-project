import RecipeIngredientsList from 'components/RecipeIngredientsList/RecipeIngredientsList';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCocktailByIdThunk } from 'redux/Cocktails/cocktailsOperations';
import { selectCocktailsIsLoading } from 'redux/selectors';

export const RecipePage = ({ id }) => {
  // we must get id with props
  const dispatch = useDispatch();
  const loading = useSelector(selectCocktailsIsLoading);

  useEffect(() => {
    // fetch recipe
    dispatch(getCocktailByIdThunk('639b6de9ff77d221f190c522'));
  }, []); // eslint-disable-line

  return (
    <>
      <RecipePageHero />
      {console.log(loading)}
      {!loading && <RecipeIngredientsList />}
      <RecipePreparation />
    </>
  );
};
