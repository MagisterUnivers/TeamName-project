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

const DrinkCard = ({ cocktail, page }) => {
  return (
    <Card>
      <Link to={`/main/recipe/${cocktail._id}`}>
        <Image
          src={cocktail.drinkThumb}
          alt={cocktail.drink}
          onError={e => {
            e.currentTarget.src = drink;
          }}
        />
        <Ingredientswrapper position={page}>
          <Drinkingreds>{cocktail.drink}</Drinkingreds>
          <Ingredients>Ingredients</Ingredients>
        </Ingredientswrapper>
      </Link>
      {page === 'my' && <AboutStyled>{cocktail.about}</AboutStyled>}
      <ButtonsWrapper>
        {page === 'my' && <SeeButton id={cocktail._id} />}
        {page === 'my' && <DeleteButton id={cocktail._id} />}
      </ButtonsWrapper>
    </Card>
  );
};

export default DrinkCard;
