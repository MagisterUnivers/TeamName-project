import { useSelector } from 'react-redux';

import { DrinkCard } from 'components/DrinkCard/DrinkCard';
import { selectCocktails, selectFavorite } from 'redux/selectors';
import { FavoriteListStyled, Section } from './FavoriteList.styled';

export const FavoriteList = () => {
  const favoriteCocktails = useSelector(selectFavorite);

  return (
    <Section>
      <FavoriteListStyled>
        {favoriteCocktails !== undefined && favoriteCocktails.length !== 0 ? (
          favoriteCocktails.map(favoriteCocktails => (
            <DrinkCard
              key={favoriteCocktails._id}
              page={'my'}
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