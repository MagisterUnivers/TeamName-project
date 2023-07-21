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
import { useDispatch } from 'react-redux';
import { removeFromFavoriteThunk } from 'redux/Cocktails/cocktailsOperations';

export const DrinkCard = ({ cocktail, page }) => {
  const dispatch = useDispatch()
  const handleRemoveButton = () =>{
    console.log("remove");
    dispatch(removeFromFavoriteThunk(cocktail._id))
  }

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
        <button type='button' onClick={handleRemoveButton}>Delete</button>
      </Ingredientswrapper>

      {page === 'my' && <AboutStyled>{cocktail.about}</AboutStyled>}
      <ButtonsWrapper>
        {page === 'my' && <SeeButton id={cocktail._id} />}
        {page === 'my' && <DeleteButton id={cocktail._id} />}
      </ButtonsWrapper>
    </Card>
  );
};
