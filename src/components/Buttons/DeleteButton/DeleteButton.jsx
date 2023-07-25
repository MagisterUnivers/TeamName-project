import { useState } from 'react';
import { DeleteModal } from 'components';
import { DeleteButtonStyled, StyledTrash } from './DeleteButton.styled';

export const DeleteButton = ({ id, page }) => {
  const [ModalOpen, setModalOpen] = useState(false);

  const onClose = () => {
    setModalOpen(!ModalOpen);
  };

  return (
    <>
      <DeleteButtonStyled onClick={onClose}>
        {<StyledTrash />}
      </DeleteButtonStyled>
      {ModalOpen && <DeleteModal onClose={onClose} page={page} id={id} />}
    </>
  );
};
