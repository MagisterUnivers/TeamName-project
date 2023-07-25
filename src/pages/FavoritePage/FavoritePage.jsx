import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from 'redux/selectors';
import { Paginator, MainPageTitle, Container, FavoriteList } from 'components';
import { getAllFavoriteDrinksThunk } from 'redux/Cocktails/cocktailsOperations';
import { useMediaRules } from 'hooks';
import { BottomPadding, PageWrapFavorite } from './FavoritePage.styled';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const { isDesktop } = useMediaRules();
  const limit = isDesktop ? 9 : 8;

  useEffect(() => {
    dispatch(getAllFavoriteDrinksThunk({ page, limit }));
  }, [page, limit, dispatch]);

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
