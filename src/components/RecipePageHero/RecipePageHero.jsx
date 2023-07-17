import React from 'react';
import { useSelector } from 'react-redux';
import { selectCocktails } from 'redux/selectors';

const RecipePageHero = ({ data }) => {
  const cocktails = useSelector(selectCocktails);

  console.log(cocktails);

  if (!data) {
    console.log('Empty');
    return null;
  }

  return (
    data && (
      <>
        <p>{cocktails.glass}</p>
        <h2>{cocktails.drink}</h2>
        <p>{cocktails.about ? data.about : 'sample about'}</p>
        <img src={cocktails.drinkThumb} alt="cocktail thumb" />
      </>
    )
  );
};

export default RecipePageHero;
