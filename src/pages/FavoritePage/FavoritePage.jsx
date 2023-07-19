import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllFavoriteDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import { Paginator, MyRecipesList, MainPageTitle } from 'components';

export const FavoritePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFavoriteDrinksThunk());
  }, [dispatch]);

  return (
    <>
      <MainPageTitle title={'Favotites'} />
      <MyRecipesList />
      <Paginator />
    </>
  );
};
