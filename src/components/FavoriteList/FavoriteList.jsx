import { useSelector } from 'react-redux';

import { DrinkCard } from 'components/DrinkCard/DrinkCard';
import { selectCocktails, selectFavorite, selectTheme } from 'redux/selectors';
import {
  FavoriteListStyled,
  WrapDiv,
  NotFavorioteText,
  NotFoundImg,
} from './FavoriteList.styled';
import { useMediaQuery } from 'react-responsive';

const notFoundImg1x = require('../../assets/img/NotFound1x.jpg');
const notFoundImg2x = require('../../assets/img/NotFound2x.jpg');
const notFoundWhite1x = require('../../assets/img/notFoundWhite1x.png');
const notFoundWhite2x = require('../../assets/img/notFoundWhite2x.png');

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
