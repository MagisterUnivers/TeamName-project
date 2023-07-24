import { useDispatch } from 'react-redux';
import { getAllFavoriteDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import { Paginator, MainPageTitle, Section } from 'components';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { PageWrapFavorite } from './FavoritePage.styled';

const FavoritePage = () => {
  const dispatch = useDispatch();
  dispatch(getAllFavoriteDrinksThunk());

  return (
    <PageWrapFavorite>
      <MainPageTitle title={'Favorites'} />
      <FavoriteList />
      <Paginator />
    </PageWrapFavorite>
  );
};

export default FavoritePage;
