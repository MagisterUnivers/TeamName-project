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
  selectFavorite,
  selectUser,
} from 'redux/selectors';

const RecipePage = ({ id }) => {
  // we must get id with props
  const dispatch = useDispatch();
  const loading = useSelector(selectCocktailsIsLoading);
  // const contact = useSelector(selectCocktails);
  const contact = useSelector(selectFavorite);
  const user = useSelector(selectUser);
  const idQuery = useParams();
  let filter;

  useEffect(() => {
    // fetch recipe
    dispatch(getCocktailByIdThunk(idQuery.id)); // 1;
    // console.log(contact, 'Contact');
  }, []); // eslint-disable-line

  const handleSend = () => {
    filter = favoriteFilter(contact, user);
    if (filter) {
      dispatch(removeFromFavoriteThunk(contact._id)); // 3
      // console.log('remove favorite');
    } else {
      dispatch(addToFavoriteThunk(contact._id)).then(res => {
        // 4
        if (res.meta.requestStatus === 'fulfilled')
          dispatch(getCocktailByIdThunk(idQuery.id)); // 5
      });
      // console.log('add favorite');
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

export default RecipePage;
