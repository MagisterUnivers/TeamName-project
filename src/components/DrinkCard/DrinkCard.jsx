import React from 'react';

import {
  Card,
  Drinkingreds,
  Image,
  Ingredients,
  Ingredientswrapper,
} from './Styles-DrinkCard';
import { Link } from 'react-router-dom';
// import drink from './exampledrink.jpg';

const DrinkCard = ({ cocktail }) => {
  return (
    <Card>
      <Link to={`/recipes/${cocktail._id}`}>
        <Image src={cocktail.drinkThumb} alt="{cocktail.drink}" />
        <Ingredientswrapper>
          <Drinkingreds>{cocktail.drink}</Drinkingreds>
          <Ingredients>Ingredients</Ingredients>
        </Ingredientswrapper>
      </Link>
    </Card>
  );
};

export default DrinkCard;
