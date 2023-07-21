import { useSelector } from 'react-redux';

import { DrinkCard } from 'components/DrinkCard/DrinkCard';
import { selectFavorite, selectCocktails } from 'redux/selectors';
import { FavoriteListStyled, Section } from './FavoriteList.styled';

export const FavoriteList = () => {
  const favoriteCocktails = useSelector(selectFavorite);

  return (
    <Section>
      <FavoriteListStyled>
        {favoriteCocktails.length !== 0 ? (
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