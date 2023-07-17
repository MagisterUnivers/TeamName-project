import React from 'react';

import {
  AboutStyled,
  ButtonsWrapper,
  Card,
  Drinkingreds,
  Image,
  Ingredients,
  Ingredientswrapper,
} from './DrinkCard.styled';
import { Link } from 'react-router-dom';
import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';
import SeeButton from 'components/Buttons/SeeButton/SeeButton';
import drink from './defaultimg.jpg';

const DrinkCard = ({ cocktail, my }) => {
  console.log(cocktail.drinkThumb);

  return (
    <Card>
      <Link to={`/recipes/${cocktail._id}`}>
        <Image
          src={cocktail.drinkThumb}
          alt={cocktail.drink}
          onError={e => {
            e.currentTarget.src = drink;
          }}
        />
        <Ingredientswrapper>
          <Drinkingreds>{cocktail.drink}</Drinkingreds>
          <Ingredients>Ingredients</Ingredients>
        </Ingredientswrapper>
      </Link>
      {my && <AboutStyled>{cocktail.about}</AboutStyled>}
      <ButtonsWrapper>
        {my && <SeeButton id={cocktail._id} />}
        {my && <DeleteButton id={cocktail._id} />}
      </ButtonsWrapper>
    </Card>
  );
};

export default DrinkCard;
