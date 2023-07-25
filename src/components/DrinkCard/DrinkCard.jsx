import { Link } from 'react-router-dom';
import { SeeButton, DeleteButton } from 'components';
import drink from '../../assets/img/DrinkPlaceholder.jpg';
import {
  AboutStyled,
  ButtonsWrapper,
  Card,
  Drinkingreds,
  Image,
  Ingredients,
  Ingredientswrapper,
  ImageWrapper,
  OneMoreWrapper,
  Wrapper,
} from './DrinkCard.styled';

export const DrinkCard = ({ cocktail, page }) => {
  return (
    <Card>
      <Link to={`/main/recipe/${cocktail._id}`}>
        <OneMoreWrapper>
          <ImageWrapper>
            <Image
              src={cocktail.drinkThumb}
              alt={cocktail.drink}
              onError={e => {
                e.currentTarget.src = drink;
              }}
            />
          </ImageWrapper>
        </OneMoreWrapper>
      </Link>
      <Wrapper>
        <Ingredientswrapper position={page}>
          <Link to={`/main/recipe/${cocktail._id}`}>
            <Drinkingreds>{cocktail.drink}</Drinkingreds>
          </Link>
          <Ingredients>Ingredients</Ingredients>
        </Ingredientswrapper>
      </Wrapper>
      {(page === 'my' || page === 'favorite') && (
        <AboutStyled>{cocktail.about}</AboutStyled>
      )}
      <ButtonsWrapper>
        {(page === 'my' || page === 'favorite') && (
          <SeeButton id={cocktail._id} />
        )}
        {(page === 'my' || page === 'favorite') && (
          <DeleteButton id={cocktail._id} page={page} />
        )}
      </ButtonsWrapper>
    </Card>
  );
};
