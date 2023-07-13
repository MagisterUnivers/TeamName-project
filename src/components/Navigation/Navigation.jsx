import React from 'react';
import { NavContainer, StyledItem, StyledLink  } from "./NavigationStyled"
import { useMediaRules } from "../../hooks/useMediaRules";
import styled from 'styled-components';

const Navigation = () => {
  const { isDesktop } = useMediaRules();

  const StyledList = styled.ul`
  display: flex;
  flex-direction: ${isDesktop ? 'row' : 'column'};
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

  return (
    <NavContainer>
      <StyledList>
        <StyledItem>
          <StyledLink to="/">Home</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to="drinks">Drinks</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to="add">Add recipe</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to="my">My recipes</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to="favorite">Fovorites</StyledLink>
        </StyledItem>
      </StyledList>
    </NavContainer>
  );
};

export default Navigation;
