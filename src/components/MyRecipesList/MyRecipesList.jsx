import DrinkCard from 'components/DrinkCard/DrinkCard';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCocktails, selectOwn } from 'redux/selectors';
import { MyRecipesListStyled, Section } from './MyrecipesList.styled';
import NotFound from 'components/NotFound/NotFound';

const MyRecipesList = () => {
  const ownCocktails = useSelector(selectOwn);
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

export default MyRecipesList;
