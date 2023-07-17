import React from 'react';
import { useSelector } from 'react-redux';
import { selectCocktails } from 'redux/selectors';
import {
  StyledTitle,
  StyledContentWrapper,
  StyledTextWrapper,
  StyledImage,
} from './RecipePreparation.styled';

const RecipePreparation = () => {
  const cocktails = useSelector(selectCocktails);

  console.log(cocktails, 'state / selector');

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
            width={631}
            height={430}
          />
          <StyledTextWrapper>
            <p>About</p>
            <p>Preparation: 1) something 2) something2</p>
          </StyledTextWrapper>
        </StyledContentWrapper>
      </section>
    </>
  );
};

export default RecipePreparation;
