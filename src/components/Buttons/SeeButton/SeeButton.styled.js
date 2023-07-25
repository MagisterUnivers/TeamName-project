import { devices } from 'constants/breakpoints';
import { styled } from 'styled-components';

export const SeeButtonStyled = styled.button`
  width: 151px;
  height: 46px;
  border-radius: 42px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.textColor};
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
  padding-top: 14px;
  padding-bottom: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover,
  &:active {
    background-color: ${props => props.theme.secondBtnHoverColor};
  }


  @media ${devices.tablet} {
    width: 169px;
    height: 54px;
    font-size: 16px;
    line-height: calc(18 / 16);
    padding-top: 18px;
    padding-bottom: 18px;
  }
  @media ${devices.desktop} {
  }
`;
