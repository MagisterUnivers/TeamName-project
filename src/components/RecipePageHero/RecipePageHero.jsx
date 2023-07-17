import { useSelector } from 'react-redux';
import { selectCocktails } from 'redux/selectors';
import {
  StyledGlassServi,
  StyledTitle,
  StyledAboutContent,
  StyledButton,
  StyledImage,
} from './RecipePageHero.styled';

const RecipePageHero = () => {
  const cocktails = useSelector(selectCocktails);

  // console.log(cocktails, 'state / selector');

  if (!cocktails) {
    console.log('Empty');
    return null;
  }

  return (
    <>
      <StyledGlassServi>{cocktails.glass}</StyledGlassServi>
      <StyledTitle>{cocktails.drink}</StyledTitle>
      <StyledAboutContent>
        {cocktails.about ? cocktails.about : 'sample about'}
      </StyledAboutContent>
      <StyledButton>Add recipe to favorite</StyledButton>
      <StyledImage
        src={cocktails.drinkThumb}
        alt="cocktail thumb"
        width={400}
        height={400}
      />
    </>
  );
};

export default RecipePageHero;
