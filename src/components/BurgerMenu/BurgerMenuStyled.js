import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const slideOut = keyframes`
   from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const BurgerMenuContainer = styled.div`
  background-color: rgba(10, 10, 17, 1);
  background-color: var(--dark-blue);
  min-width: 100%;
  min-height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation-duration: 0.4s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
  animation-name: ${({ isMenuOpen }) => (isMenuOpen ? slideIn : slideOut)};
`;

export const HeaderWrp = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
`;

export const UserLogoWrp = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
