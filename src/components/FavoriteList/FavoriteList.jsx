import { useSelector } from 'react-redux';
import { DrinkCard } from 'components';
import { selectFavorite, selectTheme } from 'redux/selectors';
import {
  FavoriteListStyled,
  WrapDiv,
  NotFavorioteText,
  NotFoundImg,
} from './FavoriteList.styled';

export const FavoriteList = () => {
  const favoriteCocktails = useSelector(selectFavorite);
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
          <NotFoundImg theme={theme} />
          <NotFavorioteText theme={theme}>
            You haven't added any favorite cocktails yet
          </NotFavorioteText>
        </WrapDiv>
      )}
    </>
  );
};
