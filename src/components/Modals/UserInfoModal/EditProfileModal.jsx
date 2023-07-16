import React, { useState } from 'react';
import {
  ChangeProfileButton,
  LogOutButton,
  ModalContent,
  ModalWrapper,
} from './EditProfileModal.styled';
import ConfirmLogoutModal from './ConfirmLogout';
import UserInfoModal from './UserInfoModal';

const EditProfileModal = () => {
  const [isChangeProfileOpen, setIsChangeProfileOpen] = useState(false);
  const [isConfirmLogoutOpen, setIsConfirmLogoutOpen] = useState(false);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);

  const handleOpenUserInfo = () => {
    setIsChangeProfileOpen(false);
    setIsUserInfoOpen(true);
  };

  const handleConfirmLogout = () => {
    setIsConfirmLogoutOpen(true);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsChangeProfileOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsChangeProfileOpen(false);
    }
  };

  return (
    <ModalWrapper>
      <ModalContent onClick={handleModalClick} onKeyDown={handleKeyDown}>
        <ChangeProfileButton
          onClick={() => {
            setIsChangeProfileOpen(true);
            handleOpenUserInfo();
          }}
        >
          Change Profile
          <img src="./edit-2.svg" alt="pencil" width="14" />
        </ChangeProfileButton>
        <LogOutButton onClick={handleConfirmLogout}>Log out</LogOutButton>
      </ModalContent>

      {isConfirmLogoutOpen && (
        <ConfirmLogoutModal onCloseModal={setIsConfirmLogoutOpen} />
      )}
      {isUserInfoOpen && <UserInfoModal onCloseModal={setIsUserInfoOpen} />}
    </ModalWrapper>
  );
};

export default EditProfileModal;