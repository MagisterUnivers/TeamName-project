import { Paginator, MainPageTitle, Container } from 'components';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { useDispatch } from 'react-redux';
import { getAllFavoriteDrinksThunk } from 'redux/Cocktails/cocktailsOperations';

const FavoritePage = () => {
  const despatch = useDispatch();
  despatch(getAllFavoriteDrinksThunk());

  return (
    <>
      <Container>
        <MainPageTitle title={'Favorites'} />
        <FavoriteList />
        <Paginator />
      </Container>
    </>
  );
};

export default FavoritePage;
