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
                <StyledImage
                  src={require('../../assets/img/Popular90x90.png')}
                  alt="popular thumb"
                  width={90}
                  height={90}
                />
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
