import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutThunk } from 'redux/Auth/authOperations';
import {
  ModalWrapper,
  ModalContent,
  CancelButton,
  LogOutButton,
} from './ConfirmLogout.styled';
import { CloseButton } from './UserInfoModal.styled';

const ConfirmLogout = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(logoutThunk()).then(res => {
        if (res.payload && res.payload.status === 204) {
          navigate('/signin');
  }});
  };

  return (
    <ModalWrapper>
      <CloseButton onClick={onClose}>
        <img src="../../../../public/images/close.svg" alt="Close" />
      </CloseButton>
      <ModalContent>
        Are you sure you want to log out?
        <LogOutButton onClick={handleDelete}>Log out</LogOutButton>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
        
      </ModalContent>
      `
    </ModalWrapper>
  );
};
export default ConfirmLogout;
