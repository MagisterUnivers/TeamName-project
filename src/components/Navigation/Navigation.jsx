import {
  NavContainer,
  StyledItem,
  StyledLink,
  StyledList,
} from './Navigation.styled';

export const Navigation = () => {
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
