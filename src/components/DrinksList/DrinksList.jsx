import DrinkCard from 'components/DrinkCard/DrinkCard';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCocktails } from 'redux/selectors';
import { DrinkListStyled, Section } from './DrinkList.styled';
import NotFound from 'components/NotFound/NotFound';

const DrinksList = () => {
  const cocktails = useSelector(selectCocktails);
  return (
    <Section>
      <DrinkListStyled>
        {cocktails.length !== 0 ? (
          cocktails.map(cocktail => (
            <DrinkCard key={cocktail._id} cocktail={cocktail} page={'drinks'} />
          ))
        ) : (
          <NotFound
            message={"We haven't found any cocktails for this search"}
          />
        )}
      </DrinkListStyled>
    </Section>
  );
};

export default DrinksList;
