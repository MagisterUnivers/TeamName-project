import { Paginator, MainPageTitle } from 'components';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';

const FavoritePage = () => {
  return (
    <>
      <MainPageTitle title={'Favorites'} />
      <FavoriteList />
      <Paginator />
    </>
  );
};

export default FavoritePage;
