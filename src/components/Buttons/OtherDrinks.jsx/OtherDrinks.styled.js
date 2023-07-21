import { devices } from 'constants/breakpoints';
import { Link } from 'react-router-dom';

import { styled } from 'styled-components';

export const StyledOtherWrapper = styled.div`
display:flex;
justify-content:center;`
export const StyledOtherButton = styled(Link)`
  /* width: 151px;
  height: 46px; */
  
  border-radius: 42px;
  background: ${props => props.theme.textColor};
  color: ${props => props.theme.bgrColor};
  font-size: 14px;
  font-weight: 600;
  line-height: calc(18 / 14);
  text-align: center;
  padding: 14px 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid transparent;
  margin-bottom: 94px;
  transition: background-color 400ms ease, border-color 400ms ease, color 400ms ease;
  &:hover {
    background-color: transparent;
    border-color: ${props => props.theme.textColor};
    color: ${props => props.theme.textColor};
  }

  &:active {
    background-color: #161f37;
  }
  @media ${devices.tablet} {
    /* width: 183px;
    height: 54px; */
    font-size: 16px;
    line-height: calc(18 / 16);
    padding: 18px 44px;
  }
`;
