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

export const StyledItem = styled.li`
  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover{
    background-color: #161F37;
  }

  &:active{
    background-color: #161F37;
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${props => props.theme.textColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
