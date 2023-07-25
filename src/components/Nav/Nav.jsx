import { useLocation } from 'react-router';
import { navRoutes } from 'constants';
import { StyledListItem, StyledNavButton, StyledNavLink } from './Nav.styled';

export const Nav = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav>
      <ul>
        {navRoutes.map(({ name, route }) => (
          <StyledListItem key={name}>
            {location.pathname === route ? (
              <StyledNavButton type="button" onClick={scrollToTop}>
                {name}
              </StyledNavButton>
            ) : (
              <StyledNavLink to={route}>{name}</StyledNavLink>
            )}
          </StyledListItem>
        ))}
      </ul>
    </nav>
  );
};
