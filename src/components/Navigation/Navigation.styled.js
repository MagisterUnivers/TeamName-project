import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1440px) {
    height: auto;
  }
`;

export const StyledItem = styled.li``;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid ${props => props.theme.borderColor};
  transition: background-color 0.3s ease;

  color: ${props => props.theme.textColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  &:hover,
  &:active {
    background-color: ${props => props.theme.secondBtnHoverColor};
  }
`;
