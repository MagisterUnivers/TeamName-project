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
} from './DrinkCard.styled';

export const DrinkCard = ({ cocktail, page }) => {
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
