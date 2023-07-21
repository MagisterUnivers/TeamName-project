import React from 'react';
import { DeleteButtonStyled } from './DeleteButton.styled';
import { ReactComponent as Trash } from '../../../assets/icons/trash.svg';
import { useDispatch } from 'react-redux';
import { removeFromFavoriteThunk } from 'redux/Cocktails/cocktailsOperations';

export const DeleteButton = ({ id }) => {
  const dispatch = useDispatch()
  const handleClick = () => {dispatch(removeFromFavoriteThunk(id))};
  return (
    <DeleteButtonStyled onClick={handleClick}>{<Trash />}</DeleteButtonStyled>
  );
};
