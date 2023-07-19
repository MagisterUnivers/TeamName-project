import React from 'react';
import { useSelector } from 'react-redux';

import DrinkCard from 'components/DrinkCard/DrinkCard';
import { selectOwn } from 'redux/selectors';
import { MyRecipesListStyled, Section } from './MyrecipesList.styled';

export const MyRecipesList = () => {
  const ownCocktails = useSelector(selectOwn);
  console.log(ownCocktails);
  return (
    <Section>
      <MyRecipesListStyled>
        {ownCocktails.length !== 0 ? (
          ownCocktails.map(ownCocktail => (
            <DrinkCard
              key={ownCocktail._id}
              page={'my'}
              cocktail={ownCocktail}
            />
          ))
        ) : (
          <NotFound message={"You haven't added any cocktail recipes yet"} />
        )}
      </MyRecipesListStyled>
    </Section>
  );
};
