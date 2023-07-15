import { devices } from 'constants/breakpoints';
import styled from 'styled-components';

export const getStyledIcon = component => styled(component)`
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.textColor};
  @media ${devices.tablet} {
    width: 20px;
    height: 20px;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  min-width: 100%;
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(2px);
  opacity: 1;
  transition: opacity 0.3s ease-in-out, left 0.3s ease-in-out;
`

export const ModalBody = styled.div`
  position: relative;
  width: 177px;
  he: 134px;
  padding: 18px;
  position: fixed;
  border-radius: 8px;
  background: #161F37;
  z-index: 10; 
  top: 10%;
  right: 10%;
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 38px;

    @media ${devices.tablet} {
   
    }

    @media ${devices.desktop} {
      right: 15%;
    }

`

export const InputWrp= styled.div`
width: 141px;
display: flex;
align-items: center;
justify-content: space-between;
width: 141px;
background-color: transparent;
border: none;
outline: none;
cursor: pointer;

`