import React from 'react';
import { useSelector } from 'react-redux';

import { DrinkCard } from 'components/DrinkCard/DrinkCard';
import { selectCocktails } from 'redux/selectors';
import { MyRecipesListStyled, Section } from './MyrecipesList.styled';

export const MyFavoritesList = () => {
  const favoriteCocktails = useSelector(selectCocktails);

  return (
    <Section>
      <MyRecipesListStyled>
        {favoriteCocktails.length !== 0 ? (
          favoriteCocktails.map(ownCocktail => (
            <DrinkCard
              key={ownCocktail._id}
              page={'my'}
              cocktail={ownCocktail}
            />
          ))
        ) : (
          <p>Not found</p>
          // <NotFound message={"You haven't added any cocktail recipes yet"} />
        )}
      </MyRecipesListStyled>
    </Section>
  );
};
