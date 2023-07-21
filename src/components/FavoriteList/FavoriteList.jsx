import { useDispatch, useSelector } from 'react-redux';

import { DrinkCard } from 'components/DrinkCard/DrinkCard';
import { selectCocktails, selectFavorite } from 'redux/selectors';
import { FavoriteListStyled, Section } from './FavoriteList.styled';
import { useEffect } from 'react';
import { getAllFavoriteDrinksThunk } from 'redux/Cocktails/cocktailsOperations';

export const FavoriteList = () => {
  const favoriteCocktails = useSelector(selectFavorite);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (favoriteCocktails.length !== 0) return;
  //   dispatch(getAllFavoriteDrinksThunk());
  // }, [dispatch, favoriteCocktails]);

  return (
    <Section>
      <FavoriteListStyled>
        {Array.isArray(favoriteCocktails) && favoriteCocktails.length !== 0 ? (
          favoriteCocktails.map(favoriteCocktails => (
            <DrinkCard
              key={favoriteCocktails._id}
              page={'favorite'}
              cocktail={favoriteCocktails}
            />
          ))
        ) : (
          <p>Not found</p>
          // <NotFound message={"You haven't added any cocktail recipes yet"} />
        )}
      </FavoriteListStyled>
    </Section>
  );
};