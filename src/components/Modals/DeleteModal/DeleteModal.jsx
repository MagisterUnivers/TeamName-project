import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  removeFromFavoriteThunk,
  removeRecipeThunk,
} from 'redux/Cocktails/cocktailsOperations';
import {
  ButtonWrapper,
  ModalWrapper,
  StyledDelButton,
  StyledText,
} from './DeleteModal.styled';

export const DeleteModal = ({ onClose, page, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (page === 'favorite') {
      dispatch(removeFromFavoriteThunk(id));
      onClose();
      return;
    }
    if (page === 'my') {
      dispatch(removeRecipeThunk(id));
      onClose();
      return;
    }
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      if (!event.target.closest('.modal-content')) {
        onClose();
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <ModalWrapper className="modal-content">
      <StyledText>Remove from list?</StyledText>
      <ButtonWrapper>
        <StyledDelButton name="yes" onClick={handleDelete}>
          Yes
        </StyledDelButton>
        <StyledDelButton name="no" onClick={onClose}>
          No
        </StyledDelButton>
      </ButtonWrapper>
    </ModalWrapper>
  );
};
