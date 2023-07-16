import React from 'react';

import {
  Card,
  Drinkingreds,
  Image,
  Ingredients,
  Ingredientswrapper,
} from './Styles-DrinkCard';
import { Link } from 'react-router-dom';

const DrinkCard = ({ cocktail, my }) => {
  // console.log(cocktail);
  return (
    <Card>
      <Link to={`/recipes/${cocktail._id}`}>
        <Image src={cocktail.drinkThumb} alt="{cocktail.drink}" />
        <Ingredientswrapper>
          <Drinkingreds>{cocktail.drink}</Drinkingreds>
          <Ingredients>Ingredients</Ingredients>
        </Ingredientswrapper>
        {my && <button>See recipe</button>}
        {my && <button>See recipe</button>}
      </Link>
    </Card>
  );
};

export default DrinkCard;
