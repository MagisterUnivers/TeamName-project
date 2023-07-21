import React from 'react';
import {
  ButtonWrapper,
  ModalWrapper,
  StyledDelButton,
  StyledText,
} from './DeleteModal.styled';

export const DeleteModal = ({onClose}) => {
  return (
    <ModalWrapper>
      <StyledText>Remove from list?</StyledText>
      <ButtonWrapper>
        <StyledDelButton name="yes">Yes</StyledDelButton>
        <StyledDelButton name="no" onClick={onClose}>No</StyledDelButton>
      </ButtonWrapper>
    </ModalWrapper>
  );
};
