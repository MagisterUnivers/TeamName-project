import { createPortal } from 'react-dom';
import { StyledModal, StyledOverlay } from './ModalWindow.styled';

const portal = document.getElementById('portal');

export const ModalWindow = ({ isModalOpen, toggleModal, children }) => {
  return createPortal(
    <StyledOverlay>
      <StyledModal>
        <button onClick={toggleModal}>Close</button>
        {children}
      </StyledModal>
    </StyledOverlay>,
    portal
  );
};
