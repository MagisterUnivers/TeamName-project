import React from 'react';
import { StyledOtherButton, StyledOtherWrapper } from './OtherDrinks.styled';

export const OtherDrinksButton = () => {
  return (
    <StyledOtherWrapper>
      <StyledOtherButton to={'/main/drinks/Cocktail'}>
        Other Drinks
      </StyledOtherButton>
    </StyledOtherWrapper>
  );
};
