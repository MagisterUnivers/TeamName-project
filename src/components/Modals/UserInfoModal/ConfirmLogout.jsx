import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutThunk } from 'redux/Auth/authOperations';
import {
  ModalWrapper,
  ModalContent,
  LogOutButton,
  CloseButton,
  ModalText,
  ButtonWrapper,
} from './ConfirmLogout.styled';

import XIcon from './x.svg';

const ConfirmLogout = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(logoutThunk()).then(res => {
      console.log('Response:', res.payload);
        if (res.payload && res.payload.status === 204) {
          navigate('/signin');
  }});
  };

  return (
    <ModalWrapper>
       <ModalContent>
      <CloseButton onClick={onClose}>
        <img src={XIcon} alt="Close" width={24}/>
      </CloseButton>
      <ModalText>
        Are you sure you want to log out?
        </ModalText>
        <ButtonWrapper>
        <LogOutButton onClick={handleDelete}>Log out</LogOutButton>
        <LogOutButton onClick={onClose}>Cancel</LogOutButton>
        </ButtonWrapper>
      </ModalContent>
      `
    </ModalWrapper>
  );
};
export default ConfirmLogout;
