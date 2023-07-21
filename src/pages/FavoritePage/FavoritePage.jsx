import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllFavoriteDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import { Paginator, MyRecipesList, MainPageTitle } from 'components';

const FavoritePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFavoriteDrinksThunk());
  }, [dispatch]);

  return (
    <>
      <MainPageTitle title={'Favorites'} />
      <MyRecipesList />
      <Paginator />
    </>
  );
};

export default FavoritePage;
