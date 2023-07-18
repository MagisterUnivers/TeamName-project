import DrinkCard from 'components/DrinkCard/DrinkCard';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCocktails } from 'redux/selectors';
import { MyRecipesListStyled, Section } from './MyrecipesList.styled';
import NotFound from 'components/NotFound/NotFound';

const MyRecipesList = () => {
  const cocktails = useSelector(selectCocktails);
  return (
    <Section>
      <MyRecipesListStyled>
        {cocktails.length !== 0 ? (
          cocktails.map(cocktail => (
            <DrinkCard key={cocktail._id} page={'my'} cocktail={cocktail} />
          ))
        ) : (
          <NotFound message={"You haven't added any cocktail recipes yet"} />
        )}
      </MyRecipesListStyled>
    </Section>
  );
};

export default MyRecipesList;
