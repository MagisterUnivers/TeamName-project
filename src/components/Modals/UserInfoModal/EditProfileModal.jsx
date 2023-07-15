import React, { useState } from 'react';
import {
  ChangeProfileButton,
  LogOutButton,
  ModalContent,
  ModalWrapper,
} from './EditProfileModal.styled';

const EditProfileModal = () => {
  const [isChangeProfileOpen, setIsChangeProfileOpen] = useState(false);

//   const handleEditProfileClick = () => {
//     setIsChangeProfileOpen(true);
//   };

  const handleConfirmLogout = () => {
    // Обробка підтвердження виходу
  };
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <ModalWrapper>
      <ModalContent onClick={handleModalClick} onKeyDown={handleKeyDown}>
        <ChangeProfileButton onClick={() => setIsChangeProfileOpen(true)}>
          Change Profile
          <img src="./edit-2.svg" alt="pencil" width="14" />
        </ChangeProfileButton>
        <LogOutButton onClick={handleConfirmLogout}>Log out</LogOutButton>
        {/* <LogOutLink>Log out</LogOutLink> */}
      </ModalContent>
    </ModalWrapper>
  );
};

export default EditProfileModal;
