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
            <StyledItem>
              <StyledLink to={route} onClick={onClick}>
                {name}
              </StyledLink>
            </StyledItem>
          );
        })}
      </StyledList>
    </NavContainer>
  );
};
