import { styled } from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2000;

  animation: fadeIn 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100px;
  min-height: 100px;
  background-color: ${props => props.theme.secondBgrColor};
  padding: 50px;
  border-radius: 10px;
`;
