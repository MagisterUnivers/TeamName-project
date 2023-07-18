import React from 'react';
import { data } from './MockData';
import {
  StyledImage,
  StyledList,
  StyledListElement,
  StyledSubtitle,
  StyledTitle,
  StyledWrapper,
} from './PopularRecipe.styled';

const PopularRecipe = () => {
  // fetch to get some popular cocktail

  return (
    <>
      <StyledWrapper>
        <StyledTitle>Popular Recipe</StyledTitle>
        <StyledList>
          {data?.map(i => {
            return (
              <StyledListElement key={i.title}>
                <StyledImage src={i.src} />
                <StyledSubtitle subtitleMain={true}>{i.title}</StyledSubtitle>
                <StyledSubtitle subtitleMain={false}>{i.desc}</StyledSubtitle>
              </StyledListElement>
            );
          })}
        </StyledList>
      </StyledWrapper>
    </>
  );
};

export default PopularRecipe;
