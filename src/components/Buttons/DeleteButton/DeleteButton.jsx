import React, { useState } from 'react';
import { DeleteButtonStyled } from './DeleteButton.styled';
import { ReactComponent as Trash } from '../../../assets/icons/trash.svg';
import { DeleteModal } from 'components/Modals/DeleteModal/DeleteModal';

export const DeleteButton = ({ id }) => {
  const [ModalOpen, setModalOpen] = useState(false);
 
  const onClose = () => {
    setModalOpen(!ModalOpen)
  }
  return (
    <>
      <DeleteButtonStyled onClick={onClose}>
        {<Trash />}
      </DeleteButtonStyled>
      {ModalOpen && <DeleteModal onClose={onClose}/>}
    </>
  );
};
