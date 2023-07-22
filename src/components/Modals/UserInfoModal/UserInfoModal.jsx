import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserArray } from 'redux/selectors';
import * as Yup from 'yup';
import {
  ModalWrapper,
  CloseButton,
  UserAvatarWrapper,
  ContentWrapper,
  AvatarFrame,
  AddAvatarButton,
  StyledFormInsight,
  StyledForm,
  SaveChangeButton,
  StyledInput,
  StyledInputWrap,
  StyledIconChecked,
  StyledIconError,
} from './UserInfoModal.styled';
import {
  StyledError,
  StyledMessage,
} from 'components/RegisterForm/RegisterForm.styled';
import { updateUserThunk } from 'redux/UserInfo/userOperations';
import XIcon from './x.svg';
import AddIcon from './add_photo.svg';
import { AddIconImg } from './UserInfoModal.styled';
import { StyledInputFile } from './UserInfoModal.styled';
import { UpdateUserForm } from './UpdateUserForm';

export const UserInfoModal = ({ onClose }) => {
  // const dispatch = useDispatch();
  // const user = useSelector(selectUserArray);
  const [isOpen, setIsOpen] = useState(true);
  // const [isUpdateForm, setIsUpdateForm] = useState(null);
  // const [selectedAvatar, setSelectedAvatar] = useState (null);
  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     // console.log(event.target);
  //     if (!event.target.closest(".modal-content")) {
  //       console.log("closing modal");
  //       onClose();
  //     }
  //   };
  //   window.addEventListener("mousedown", handleOutsideClick);
  //   return () => {
  //     window.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, [onClose]);
  // useEffect(() => {
  //   if (isUpdateForm) {
  //     setIsUpdateForm(null);
  //   }
  // }, [isUpdateForm]);

  // useEffect(() => {
  //   const handleKeyDown = e => {
  //     if (e.key === 'Escape') {
  //       // onClose();
  //       setIsOpen(false)
  //     }
  //   };
  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [onClose]);

  // const handleModalClick = e => {
  //   const closeButtonClicked = e.target.closest('.close-button');
  //   const modalContentClicked = e.target.closest('.modal-content');
   
     // if (closeButtonClicked || modalContentClicked === null) {
    //   // onClose();
    // }  
    // setIsOpen(false)
    //   e.stopPropagation();
    // const handleAvatarChange = e => {
    //   const file = e.target.files[0];
    //   setSelectedAvatar(file);
    // };
  // console.log(user);
  // console.log(user.avatarURL);
  return isOpen ? (
    <ModalWrapper >
      <ContentWrapper className="modal-content">
        <CloseButton onClick={onClose} tabIndex={1} className="close-button">
          <img src={XIcon} alt="Close" width={24} />
        </CloseButton>
        <UpdateUserForm/>
      </ContentWrapper>
    </ModalWrapper>
 ) : null;
};
