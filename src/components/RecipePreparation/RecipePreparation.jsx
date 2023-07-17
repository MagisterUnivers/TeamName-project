import React from 'react';
import { useSelector } from 'react-redux';
import { selectCocktails } from 'redux/selectors';
import {
  StyledTitle,
  StyledContentWrapper,
  StyledTextWrapper,
  StyledImage,
  StyledAboutSubtitle,
} from './RecipePreparation.styled';

const RecipePreparation = () => {
  const cocktails = useSelector(selectCocktails);

  // console.log(cocktails, 'state / selector');

  if (!cocktails) {
    console.log('Empty');
    return null;
  }

  return (
    <>
      <section style={{ marginTop: 100 }}>
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
            <StyledAboutSubtitle>About</StyledAboutSubtitle>
            <StyledAboutSubtitle>
              Preparation: 1) something 2) something2
            </StyledAboutSubtitle>
          </StyledTextWrapper>
        </StyledContentWrapper>
      </section>
    </>
  );
};

export default RecipePreparation;
