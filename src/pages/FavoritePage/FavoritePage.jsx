import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllFavoriteDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import { Paginator, MainPageTitle } from 'components';

const FavoritePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFavoriteDrinksThunk());
  }, []);

  return (
    <>
      <MainPageTitle title={'Favotites'} />
      <FavoriteList />
      {/* <Paginator /> */}
    </>
  );
};

export default FavoritePage;
