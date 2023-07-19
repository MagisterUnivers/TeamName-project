import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavigate = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/register' ? (
        <StyledNavLink to="/signin">Sign In</StyledNavLink>
      ) : (
        <StyledNavLink to="/register">Registration</StyledNavLink>
      )}
    </>
  );
};

export const StyledNavLink = styled(NavLink)`
  color: #f3f3f3;
  font-size: 12px;
  font-weight: 600;
  line-height: calc(16 / 12);
  text-decoration-line: underline;
  display: block;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;
