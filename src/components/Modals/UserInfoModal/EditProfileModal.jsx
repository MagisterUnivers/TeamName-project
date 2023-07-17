import React, { useState } from 'react';
import {
  ChangeProfileButton,
  LogOutButton,
  ModalContent,
  ModalWrapper,
} from './EditProfileModal.styled';
import ConfirmLogoutModal from './ConfirmLogout';
import UserInfoModal from './UserInfoModal';
import pencilIcon from './edit-2.svg';

const EditProfileModal = () => {
  const [setIsChangeProfileOpen] = useState(false);
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
    e.stopPropagation();
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
          Edit profile
          <img src={pencilIcon} alt="pencil" width="14"/>
        </ChangeProfileButton>
        <LogOutButton onClick={handleConfirmLogout}>Log out</LogOutButton>
      </ModalContent>

      {isConfirmLogoutOpen && (
        <ConfirmLogoutModal onClose={() => setIsConfirmLogoutOpen(false)} />
      )}
      {isUserInfoOpen && <UserInfoModal onClose={handleOpenUserInfo} />}
    </ModalWrapper>
  );
};

export default EditProfileModal;
