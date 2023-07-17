import React from 'react';
import { DeleteButtonStyled } from './DeleteButton.styled';
import { ReactComponent as Trash } from '../../../assets/icons/trash.svg';

const DeleteButton = () => {
  const handleSubmit = () => {};
  return (
    <DeleteButtonStyled onSubmit={handleSubmit}>{<Trash />}</DeleteButtonStyled>
  );
};

export default DeleteButton;
