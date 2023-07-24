import styled from 'styled-components';
import { useMediaRules } from 'hooks';
import { NavContainer, StyledItem, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isDesktop } = useMediaRules();

  const StyledList = styled.ul`
    display: flex;
    flex-direction: ${isDesktop ? 'row' : 'column'};
    gap: 16px;
    align-items: center;
    justify-content: center;
  `;

  // display: flex;
  // flex-direction: ${isDesktop ? 'row' : 'column'};
  // gap: 16px;
  // align-items: center;
  // justify-content: center;

  return (
    <NavContainer>
      <StyledList>
        <StyledItem>
          <StyledLink to="home">Home</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to="drinks/Cocktail">Drinks</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to="add">Add recipe</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to="my">My recipes</StyledLink>
        </StyledItem>
        <StyledItem>
          <StyledLink to="favorite">Favorites</StyledLink>
        </StyledItem>
      </StyledList>
    </NavContainer>
  );
};
