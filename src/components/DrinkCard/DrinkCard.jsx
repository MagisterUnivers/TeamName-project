import React from 'react';

import {
  Card,
  Drinkingreds,
  Image,
  Ingredients,
  Ingredientswrapper,
} from './Styles-DrinkCard';
import drink from './exampledrink.jpg';

const DrinkCard = () => {
  return (
    <Card>
      <Image src={drink} alt="some drink" />
      <Ingredientswrapper>
        <Drinkingreds>Some Ingredients</Drinkingreds>
        <Ingredients>Ingredients</Ingredients>
      </Ingredientswrapper>
    </Card>
  );
};

export default DrinkCard;
