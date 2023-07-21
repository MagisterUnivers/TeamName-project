import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllFavoriteDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import { Paginator, MainPageTitle } from 'components';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';

const FavoritePage = () => {
  const dispatch = useDispatch();
  dispatch(getAllFavoriteDrinksThunk());

  return (
    <>
      <MainPageTitle title={'Favotites'} />
      <FavoriteList />
      {/* <Paginator /> */}
    </>
  );
};

export default FavoritePage;
