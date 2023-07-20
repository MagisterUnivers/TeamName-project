import React from 'react';
import { DeleteButtonStyled } from './DeleteButton.styled';
import { ReactComponent as Trash } from '../../../assets/icons/trash.svg';

export const DeleteButton = ({ _id }) => {
  const handleClick = () => {};
  return (
    <DeleteButtonStyled onClick={handleClick}>{<Trash />}</DeleteButtonStyled>
  );
};
