import { devices } from 'constants/breakpoints';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const SeeButtonStyled = styled.p`
  width: 151px;
  height: 46px;
  border-radius: 42px;
  background: #161f37;
  /* background: ${props => props.theme.bgrColor}; */
  color: #f3f3f3;
  /* color: ${props => props.theme.bgrColor}; */
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
  padding-top: 14px;
  padding-bottom: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  /* border: 1px solid #0a0a11; */
  &:hover {
    background-color: transparent;
    border: 1px solid #f3f3f3;
  }

  &:active {
    background-color: #161f37;
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
