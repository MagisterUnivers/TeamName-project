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
  text-decoration: none;
  text-align: center;
  display: block;
  width: fit-content;
  margin: 0 auto;

  position: relative;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    background: ${props => props.theme.textColor};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: calc(18 / 14);
  }
`;
