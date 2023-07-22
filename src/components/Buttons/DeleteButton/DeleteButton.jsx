import React, { useState } from 'react';
import { DeleteButtonStyled, StyledTrash } from './DeleteButton.styled';

import { DeleteModal } from 'components/Modals/DeleteModal/DeleteModal';

export const DeleteButton = ({ id , page}) => {
  const [ModalOpen, setModalOpen] = useState(false);
 
  const onClose = () => {
    setModalOpen(!ModalOpen)
  }
  return (
    <>
      <DeleteButtonStyled onClick={onClose}>
        {<StyledTrash />}
      </DeleteButtonStyled>
      {ModalOpen && <DeleteModal onClose={onClose} page={page} id={id}/>}
    </>
  );
};
