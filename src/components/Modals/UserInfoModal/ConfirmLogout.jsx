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
    dispatch(logoutThunk())
      .unwrap()
      .then(res => {
      console.log('Response:', res);
        if (res && res.status === 204) {
          navigate('/');
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
