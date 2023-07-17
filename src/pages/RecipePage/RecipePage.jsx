import RecipeIngredientsList from 'components/RecipeIngredientsList/RecipeIngredientsList';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import { favoriteFilter } from 'components/utils/filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getCurrentUserThunk } from 'redux/Auth/authOperations';
import {
  addToFavoriteThunk,
  getCocktailByIdThunk,
  removeFromFavoriteThunk,
} from 'redux/Cocktails/cocktailsOperations';
import {
  selectCocktails,
  selectCocktailsIsLoading,
  selectUser,
} from 'redux/selectors';

export const RecipePage = ({ id }) => {
  // we must get id with props
  const dispatch = useDispatch();
  const loading = useSelector(selectCocktailsIsLoading);
  const contact = useSelector(selectCocktails);
  const user = useSelector(selectUser);
  const idQuery = useParams();
  let filter;

  useEffect(() => {
    // fetch recipe
    dispatch(getCocktailByIdThunk(idQuery.id));
    dispatch(getCurrentUserThunk());
    console.log(contact, 'Contact');
  }, []); // eslint-disable-line

  const handleSend = () => {
    filter = favoriteFilter(contact, user);
    if (!filter) dispatch(removeFromFavoriteThunk(contact._id));
    else dispatch(addToFavoriteThunk(contact._id));
  };

  return (
    <>
      {console.log(contact, 'return')}
      <RecipePageHero func={handleSend} />
      {!loading && <RecipeIngredientsList />}
      <RecipePreparation />
    </>
  );
};
