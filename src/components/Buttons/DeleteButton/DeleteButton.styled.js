import { devices } from 'constants/breakpoints';
import { styled } from 'styled-components';

export const DeleteButtonStyled = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #161f37;
  outline:none;
  border:none;
  text-align:center;
  padding-top: 5px;
  /* background: ${props => props.theme.bgrColor}; */
  color: #f3f3f3;
  /* color: ${props => props.theme.bgrColor}; */
  @media ${devices.tablet} {
    width: 54px;
  height: 54px;
  }
  @media ${devices.desktop} {
  }
`;
