import React from 'react';
import { useSelector } from 'react-redux';

import { DrinkCard } from 'components/DrinkCard/DrinkCard';
import { selectCocktails } from 'redux/selectors';
import { MyRecipesListStyled, Section } from './MyrecipesList.styled';
import { NotFound } from 'components';

export const MyRecipesList = () => {
  const favoriteCocktails = useSelector(selectCocktails);

  return (
    <Section>
      <MyRecipesListStyled>
        {favoriteCocktails.length !== 0 ? (
          favoriteCocktails.map(favoriteCocktail => (
            <DrinkCard
              key={favoriteCocktail._id}
              page={'my'}
              cocktail={favoriteCocktail}
            />
          ))
        ) : (
          // <p>Not found</p>
          <NotFound
            message={"You haven't added any drinks to your favorites yet."}
          />
        )}
      </MyRecipesListStyled>
    </Section>
  );
};
