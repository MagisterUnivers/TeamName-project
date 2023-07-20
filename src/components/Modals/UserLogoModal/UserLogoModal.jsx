// import React from 'react';
// import { ReactComponent as iconEdit } from '../../../assets/icons/edit.svg';
// import { LogoutBtn } from 'components';
// import {
//   InputWrp,
//   ModalBody,
//   Overlay,
//   getStyledIcon,
// } from './UserLogoModal.styled';

// export const UserLogoModal = () => {
//   const StyledIconEdit = getStyledIcon(iconEdit);
//   return (
//     <Overlay>
//       <ModalBody>
//         <InputWrp>
//           Edit profile
//           <StyledIconEdit />
//         </InputWrp>
//         <LogoutBtn />
//       </ModalBody>
//     </Overlay>
//   );
// };

import { useState } from 'react';
import { ConfirmLogout, UserInfoModal } from 'components';
import pencilIcon from '../UserInfoModal/edit-2.svg';
import {
  ChangeProfileButton,
  LogOutButton,
  ModalContent,
  ModalWrapper,
} from './UserLogoModal.styled';

export const UserLogoModal = () => {
  const [isChangeProfileOpen, setIsChangeProfileOpen] = useState(false);
  const [isConfirmLogoutOpen, setIsConfirmLogoutOpen] = useState(false);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);

  const handleOpenUserInfo = () => {
    setIsChangeProfileOpen(false);
    setIsUserInfoOpen(true);
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
    }
    e.stopPropagation();
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      setIsChangeProfileOpen(false);
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
          <img src={pencilIcon} alt="pencil" width="14" />
        </ChangeProfileButton>
        <LogOutButton onClick={handleConfirmLogout}>Log out</LogOutButton>
      </ModalContent>

      {isConfirmLogoutOpen && <ConfirmLogout onClose={handleConfirmLogout} />}
      {isUserInfoOpen && <UserInfoModal onClose={handleOpenUserInfo} />}
    </ModalWrapper>
  );
};
