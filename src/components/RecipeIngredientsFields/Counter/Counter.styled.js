import { devices } from 'constants/breakpoints';
import styled from 'styled-components';

export const getStyledIcon = component => styled(component)`
  width: 16px;
  height: 16px;
  fill: rgba(243, 243, 243, 0.3);
  /* fill: ${props => props.theme.textColor}; */

  @media ${devices.tablet} {
   
  }
`

export const StyledButton = styled.button`
width: 16px;
height: 16px;
display: flex;
align-items: center;
justify-content: center;
background-color: inherit;
border: none;
outline: none;
cursor: pointer;
`

export const CounterWrp = styled.div`
width: 104px;
height: 38px;
padding: 10px 16px;
display: flex;
gap: 16px;
align-items: center;

background-color: transparent;
border-radius: 200px;
border: 1px solid rgba(243, 243, 243, 0.50);
opacity: 0.800000011920929;
`