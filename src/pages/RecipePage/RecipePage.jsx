import RecipeIngredientsList from 'components/RecipeIngredientsList/RecipeIngredientsList';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCocktailByIdThunk } from 'redux/Cocktails/cocktailsOperations';

export const RecipePage = ({ id }) => {
  // we must get id with props
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch recipe
    dispatch(getCocktailByIdThunk('639b6de9ff77d221f190c522'));
  }, [dispatch]);

  return (
    <>
      <RecipePageHero />
      <RecipeIngredientsList />
      <RecipePreparation />
    </>
  );
};
