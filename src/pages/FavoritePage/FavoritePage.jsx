import { Paginator, MainPageTitle, Container } from 'components';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { useDispatch } from 'react-redux';
import { getAllFavoriteDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import { Paginator, MainPageTitle, Section } from 'components';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { PageWrapFavorite } from './FavoritePage.styled';

const FavoritePage = () => {
  const despatch = useDispatch();
  despatch(getAllFavoriteDrinksThunk());

  return (
    <PageWrapFavorite>
      <Container>
        <MainPageTitle title={'Favorites'} />
        <FavoriteList />
        <Paginator />
      </Container>
    </PageWrapFavorite>
  );
};

export default FavoritePage;
