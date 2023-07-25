import { navRoutes } from 'constants';
import {
  NavContainer,
  StyledItem,
  StyledLink,
  StyledList,
} from './Navigation.styled';

export const Navigation = ({ onClick }) => {
  return (
    <NavContainer>
      <StyledList>
        {navRoutes.map(({ name, route }) => {
          return (
            <StyledItem key={name}>
              <StyledLink
                to={route}
                state={{ from: 'Cocktail' }}
                onClick={onClick}
              >
                {name}
              </StyledLink>
            </StyledItem>
          );
        })}
      </StyledList>
    </NavContainer>
  );
};
