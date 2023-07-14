import styled, { keyframes} from 'styled-components';

const slideIn = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const slideOut = keyframes`
   0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const BurgerMenuContainer = styled.div`
  background-color: #0A0A11;
  min-width: 100%;
  height: calc(100vh - 72px);
  position: relative;
  /* top: -100%; */
  left: 0;
  z-index: 90;
  display: flex;
  flex-direction: column;
  /* animation-duration: 0.4s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-name: ${({ showBurgerMenu }) => (showBurgerMenu ? slideOut : slideIn)}; */
  transform: ${({ showBurgerMenu }) => (showBurgerMenu ? 'translateY(50%)' : 'translateY(30%)')};
`;

