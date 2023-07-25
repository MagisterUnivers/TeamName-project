import { useState } from 'react';
import { ConfirmLogout, UserInfoModal } from 'components';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/selectors';
import pencilIcon from '../UserInfoModal/edit-2.svg';
import pencilIconBlack from '../UserInfoModal/edit-black.svg';
import {
  ChangeProfileButton,
  LogOutButton,
  ModalContent,
  ModalWrapper,
} from './UserLogoModal.styled';

export const UserLogoModal = ({ setEditProfileShown }) => {
  const theme = useSelector(selectTheme);
  const [isChangeProfileOpen, setIsChangeProfileOpen] = useState(false);
  const [isConfirmLogoutOpen, setIsConfirmLogoutOpen] = useState(false);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
  const handleOpenUserInfo = () => {
    setIsChangeProfileOpen(false);
    setIsUserInfoOpen(true);
    setEditProfileShown(true);
  };
  const handleCloseUserInfo = () => {
    setIsChangeProfileOpen(true);
    setIsUserInfoOpen(false);
    setEditProfileShown(false);
  };
  const handleConfirmLogout = () => {
    setIsChangeProfileOpen(false);
    setIsConfirmLogoutOpen(true);
  };
  const handleModalClick = e => {
    if (e.target === e.currentTarget) {
      setIsChangeProfileOpen(false);
      setIsConfirmLogoutOpen(false);
      setIsUserInfoOpen(false);
      setEditProfileShown(false);
    }
    e.stopPropagation();
  };
  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      handleCloseUserInfo();
    }
  };
  return (
    <ModalWrapper>
      <ModalContent onClick={handleModalClick} onKeyDown={handleKeyDown}>
        <ChangeProfileButton
          onClick={() => {
            handleOpenUserInfo();
          }}
        >
          Edit profile
          <img
            src={theme === 'dark' ? pencilIcon : pencilIconBlack}
            alt="pencil"
            width="14"
          />
        </ChangeProfileButton>
        <LogOutButton onClick={handleConfirmLogout}>Log out</LogOutButton>
      </ModalContent>
      {isConfirmLogoutOpen && <ConfirmLogout onClose={handleConfirmLogout} />}
      {isUserInfoOpen && <UserInfoModal onClose={handleCloseUserInfo} />}
    </ModalWrapper>
  );
};
