import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/selectors';
import { StyledSection } from 'components';
import {
  StyledTitle,
  StyledContentWrapper,
  StyledTextWrapper,
  StyledImage,
  StyledAboutSubtitle,
} from './RecipePreparation.styled';

export const RecipePreparation = () => {
  const cocktails = useSelector(selectFavorite);

  if (!cocktails) {
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
                : require('../../assets/img/RecipePlaceholder.png')
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
              {cocktails.instructions || cocktails.description
                ? cocktails.instructions || cocktails.description
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
