import { devices } from 'constants/breakpoints';
import styled from 'styled-components';

export const BurgerMenuButtonStyled = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media ${devices.tablet} {
    width: 38px;
    height: 38px;
  }
`;

export const getStyledIcon = component => styled(component)`
  width: 32px;
  height: 32px;
  fill: ${props => props.theme.textColor};
  @media ${devices.tablet} {
    width: 38px;
    height: 38px;
  }
`