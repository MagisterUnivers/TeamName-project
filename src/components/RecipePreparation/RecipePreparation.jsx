import { useSelector } from 'react-redux';
import { selectCocktails, selectFavorite } from 'redux/selectors';
import {
  StyledTitle,
  StyledContentWrapper,
  StyledTextWrapper,
  StyledImage,
  StyledAboutSubtitle,
} from './RecipePreparation.styled';
import { StyledSection } from 'components/Section/Section';

export const RecipePreparation = () => {
  const cocktails = useSelector(selectFavorite);

  console.log(cocktails, 'state / selector');

  if (!cocktails) {
    // console.log('Empty');
    return null;
  }

  return (
    <>
      <StyledSection lastsection="true">
        <StyledTitle>Recipe Preparation</StyledTitle>
        <StyledContentWrapper>
          <StyledImage
            src={
              cocktails.drinkThumb
                ? cocktails.drinkThumb
                : require('../../assets/img/testPNG.png')
            }
            alt="ingredient thumb"
            width={335}
            height={430}
          />
          <StyledTextWrapper>
            <StyledAboutSubtitle>
              {cocktails.about
                ? cocktails.about
                : `Let’s forget about the second half of this drink’s name for a moment: It doesn’t remotely resemble a classic Martini. As for the first part, it's said by some that its creator, bartender Douglas Ankrah, thought it was what a porn star would order; other stories hold that he was inspired by the smell of a stripper's perfume.`}
            </StyledAboutSubtitle>
            <StyledAboutSubtitle>
              {cocktails.instruction
                ? cocktails.instruction
                : `Fill a wine glass or a large balloon glass with ice cubes.
Add 3 ounces of Aperol to the glass.
Pour 3 ounces of Prosecco (or any other bubbly wine) over the Aperol.
Give the mixture a gentle stir to combine the ingredients.
Finish off the cocktail with a splash of sparkling water for a refreshing effervescence.`}
            </StyledAboutSubtitle>
          </StyledTextWrapper>
        </StyledContentWrapper>
      </StyledSection>
    </>
  );
};
