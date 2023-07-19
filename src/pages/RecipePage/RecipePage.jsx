import { useEffect } from 'react';
import {
  RecipePreparation,
  RecipePageHero,
  RecipeIngredientsList,
} from 'components';
import { favoriteFilter } from 'components/utils';
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
    dispatch(getCocktailByIdThunk(idQuery.id)); // 1
    dispatch(getCurrentUserThunk()); // 2
    console.log(contact, 'Contact');
  }, []); // eslint-disable-line

  const handleSend = () => {
    filter = favoriteFilter(contact, user);
    if (filter) {
      dispatch(removeFromFavoriteThunk(contact._id)); // 3
      console.log('remove favorite');
    } else {
      dispatch(addToFavoriteThunk(contact._id)).then(
        // 4
        dispatch(getCocktailByIdThunk(idQuery.id)) // 5
      );
      console.log('add favorite');
    }
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
