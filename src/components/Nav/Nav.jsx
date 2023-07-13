import { StyledListItem, StyledNavLink } from './Nav.styled';
export const Nav = () => {
  return (
    <nav>
      <ul>
        <StyledListItem>
          <StyledNavLink to="/drinks">Drinks</StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink to="/add">Add recipes</StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink to="/my">My recipes</StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink to="/favorite">Favorites</StyledNavLink>
        </StyledListItem>
      </ul>
    </nav>
  );
};
