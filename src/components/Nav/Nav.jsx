import { navRoutes } from 'constants/navRoutes';
import { StyledListItem, StyledNavButton, StyledNavLink } from './Nav.styled';
import { useLocation } from 'react-router';

export const Nav = () => {
  const location = useLocation();
  // console.log(location);
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
          <StyledListItem>
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
