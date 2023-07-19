import React from 'react';
import { data } from './MockData';
import {
  StyledImage,
  StyledList,
  StyledListElement,
  StyledSubtitle,
  StyledTextWrapper,
  StyledTitle,
  StyledWrapper,
} from './PopularRecipe.styled';

export const PopularRecipe = () => {
  // fetch to get some popular cocktail

  return (
    <>
      <StyledWrapper>
        <StyledTitle>Popular Recipe</StyledTitle>
        <StyledList>
          {data?.map(i => {
            console.log(i.desc);
            return (
              <StyledListElement key={i.title}>
                <StyledImage
                  src={require('../../assets/img/Popular90x90.png')}
                  alt="popular thumb"
                  width={90}
                  height={90}
                />
                <StyledTextWrapper>
                  <StyledSubtitle text={false}>{i.title}</StyledSubtitle>
                  <StyledSubtitle text={true}>{i.desc}</StyledSubtitle>
                </StyledTextWrapper>
              </StyledListElement>
            );
          })}
        </StyledList>
      </StyledWrapper>
    </>
  );
};
