import { useSelector } from 'react-redux';
import { selectCocktails, selectFavorite } from 'redux/selectors';
import {
  StyledCardWrapper,
  StyledGlassServi,
  StyledImage,
  StyledIngredientSubtitle,
  StyledListWrapper,
  StyledTextWrapper,
} from './RecipeIngredientsList.styled';
import { StyledSection } from 'components/Section/Section';

export const RecipeIngredientsList = () => {
  const cocktails = useSelector(selectFavorite);

  // console.log(cocktails, 'state / selector');

  if (!cocktails) {
    // console.log('Empty');
    return null;
  }

  return (
    <StyledSection>
      <StyledGlassServi>Ingredients</StyledGlassServi>
      <StyledListWrapper>
        {cocktails.ingredients &&
          cocktails.ingredients.map((item, i) => {
            return (
              <StyledCardWrapper key={i}>
                <StyledImage
                  src={
                    item.ingredientThumb
                      ? item.ingredientThumb
                      : require('../../assets/img/testPNG.png')
                  }
                  alt="ingredient thumb"
                  width={220}
                  height={220}
                />
                <StyledTextWrapper>
                  <StyledIngredientSubtitle text="true">
                    {item.title}
                  </StyledIngredientSubtitle>
                  <StyledIngredientSubtitle text="false">
                    {item.measure}
                  </StyledIngredientSubtitle>
                </StyledTextWrapper>
              </StyledCardWrapper>
            );
          })}
      </StyledListWrapper>
    </StyledSection>
  );
};
