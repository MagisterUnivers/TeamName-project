import { Link } from 'react-router-dom';
import { SeeButton, DeleteButton } from 'components';
import drink from './defaultimg.jpg';
import {
  AboutStyled,
  ButtonsWrapper,
  Card,
  Drinkingreds,
  Image,
  Ingredients,
  Ingredientswrapper,
  ImageWrapper,
} from './DrinkCard.styled';

export const DrinkCard = ({ cocktail, page }) => {
  return (
    <Card>
      <Link to={`/main/recipe/${cocktail._id}`}>
        <ImageWrapper>
          <Image
            src={cocktail.drinkThumb}
            alt={cocktail.drink}
            onError={e => {
              e.currentTarget.src = drink;
            }}
          />
        </ImageWrapper>
      </Link>

      <Ingredientswrapper position={page}>
        <Link to={`/main/recipe/${cocktail._id}`}>
          <Drinkingreds>{cocktail.drink}</Drinkingreds>
        </Link>
        <Ingredients>Ingredients</Ingredients>
      </Ingredientswrapper>

      {(page === 'my' || page === 'favorite') && <AboutStyled>{cocktail.about}</AboutStyled>}
      <ButtonsWrapper>
        {(page === 'my' || page === 'favorite') && <SeeButton id={cocktail._id}/>}
        {(page === 'my' || page === 'favorite') && <DeleteButton id={cocktail._id} page={page}/>}
      </ButtonsWrapper>
    </Card>
  );
};
