import RecipeIngredientsList from 'components/RecipeIngredientsList/RecipeIngredientsList';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getCocktailByIdThunk } from 'redux/Cocktails/cocktailsOperations';
import { selectCocktailsIsLoading } from 'redux/selectors';

export const RecipePage = ({ id }) => {
  // we must get id with props
  const dispatch = useDispatch();
  const loading = useSelector(selectCocktailsIsLoading);
  const idQuery = useParams();

  useEffect(() => {
    // fetch recipe
    dispatch(getCocktailByIdThunk(idQuery.id));
  }, []); // eslint-disable-line

  return (
    <>
      <RecipePageHero />
      {!loading && <RecipeIngredientsList />}
      <RecipePreparation />
    </>
  );
};
