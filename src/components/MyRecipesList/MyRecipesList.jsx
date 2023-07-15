import DrinkCard from 'components/DrinkCard/DrinkCard';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCocktails } from 'redux/selectors';

const MyRecipesList = () => {
  const cocktails = useSelector(selectCocktails);
  console.log('Cocktails', cocktails);
  return (
    <ul>
      {cocktails &&
        cocktails.map(cocktail => (
          <DrinkCard key={cocktail._id} my={'own'} cocktail={cocktail} />
        ))}
    </ul>
  );
};

export default MyRecipesList;
