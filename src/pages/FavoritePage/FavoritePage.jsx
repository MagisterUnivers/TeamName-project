import { Paginator, MainPageTitle, Container } from 'components';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFavoriteDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import { BottomPadding, PageWrapFavorite } from './FavoritePage.styled';
import { selectPage } from 'redux/selectors';
import { useEffect } from 'react';
import { useMediaRules } from 'hooks';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const { isDesktop } = useMediaRules();
  const limit = isDesktop ? 9 : 8;

  useEffect(() => {
    // if (ownCocktails.length !== 0) return;
    dispatch(getAllFavoriteDrinksThunk({ page, limit }));
  }, [page, limit, dispatch]);

  // dispatch(getAllFavoriteDrinksThunk({ page, limit }));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageWrapFavorite>
      <Container>
        <MainPageTitle title={'Favorites'} />
        <FavoriteList />
        <Paginator />
        <BottomPadding />
      </Container>
    </PageWrapFavorite>
  );
};

export default FavoritePage;
