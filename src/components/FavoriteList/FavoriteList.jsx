import { useSelector } from 'react-redux';
import { DrinkCard } from 'components/DrinkCard/DrinkCard';
import { selectCocktails, selectFavorite } from 'redux/selectors';
import { FavoriteListStyled, Section } from './FavoriteList.styled';

export const FavoriteList = () => {
  const favoriteCocktails = useSelector(selectFavorite);
  const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });
  const theme = useSelector(selectTheme);
  return (
    <>
      {Array.isArray(favoriteCocktails) && favoriteCocktails.length !== 0 ? (
        <FavoriteListStyled>
          {favoriteCocktails.map(favoriteCocktails => (
            <DrinkCard
              key={favoriteCocktails._id}
              page={'favorite'}
              cocktail={favoriteCocktails}
            />
          ))}
        </FavoriteListStyled>
      ) : (
        <WrapDiv>
          <NotFoundImg ismobile={isMobile} theme={theme} />
          <NotFavorioteText theme={theme}>
            You haven't added any favorite cocktails yet
          </NotFavorioteText>
        </WrapDiv>
      )}
    </>
  );
};
