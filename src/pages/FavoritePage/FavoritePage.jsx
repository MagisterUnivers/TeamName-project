import { Paginator, MainPageTitle } from 'components';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { useDispatch } from 'react-redux';
import { getAllFavoriteDrinksThunk } from 'redux/Cocktails/cocktailsOperations';

const FavoritePage = () => {
  const despatch = useDispatch()
  despatch(getAllFavoriteDrinksThunk());

  return (
    <>
      <MainPageTitle title={'Favorites'} />
      <FavoriteList />
      <Paginator />
    </>
  );
};

export default FavoritePage;
