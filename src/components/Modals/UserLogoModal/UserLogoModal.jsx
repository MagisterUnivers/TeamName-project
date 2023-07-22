// import ReactDOM from 'react-dom';
// import { useEffect, useState } from 'react';
// import { ConfirmLogout, UserInfoModal } from 'components';
// import pencilIcon from '../UserInfoModal/edit-2.svg';
// import {
//   ChangeProfileButton,
//   LogOutButton,
//   ModalContent,
//   ModalWrapper,
// } from './UserLogoModal.styled';

// const modalRoot = document.getElementById('modal-root');

// export const UserLogoModal = ({ onClose }) => {
//   // const [isOpen, setIsOpen] = useState(false);
//   const [isConfirmLogoutOpen, setIsConfirmLogoutOpen] = useState(false);
//   const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
  
//   // useEffect(() => {
//   //   console.log('UserLogoModal isOpen:', true);
//   //   return () => {
//   //     console.log('UserLogoModal isOpen:', false);
//   //   };
//   // }, []);

//   const handleOpenUserInfo = () => {
//     // setIsOpen(false);
//     setIsUserInfoOpen(true);
//   };

//   const handleConfirmLogout = () => {
//     // setIsOpen(false);
//     setIsConfirmLogoutOpen(true);
//   };

//   const handleModalClick = e => {
//     if (e.target === e.currentTarget) {
//       console.log('Modal clicked!');
//       // setIsOpen(false);
//       setIsConfirmLogoutOpen(false);
//       setIsUserInfoOpen(false);
//     }
//     e.stopPropagation();
//   };

//   const handleKeyDown = e => {
//     if (e.key === 'Escape') {
//       // setIsOpen(false);
//     }
//   };

//   return ReactDOM.createPortal(
//     // isOpen ? (
//     <ModalWrapper>
//       <ModalContent onClick={handleModalClick} onKeyDown={handleKeyDown}>
//         <ChangeProfileButton
//           onClick={() => {
//             handleOpenUserInfo();
//           }}
//         >
//           Edit profile
//           <img src={pencilIcon} alt="pencil" width="14" />
//         </ChangeProfileButton>
//         <LogOutButton onClick={handleConfirmLogout}>Log out</LogOutButton>
//       </ModalContent>

//       {isConfirmLogoutOpen && <ConfirmLogout onClose={handleConfirmLogout} />}
//       {isUserInfoOpen && <UserInfoModal onClose={handleOpenUserInfo} />}
//     </ModalWrapper>,
//     //  ) : null,
//      modalRoot 
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
export const UserLogoModal = ({ setEditProfileShown }) => {
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
          <img src={pencilIcon} alt="pencil" width="14" />
        </ChangeProfileButton>
        <LogOutButton onClick={handleConfirmLogout}>Log out</LogOutButton>
      </ModalContent>
      {isConfirmLogoutOpen && <ConfirmLogout onClose={handleConfirmLogout} />}
      {isUserInfoOpen && <UserInfoModal onClose={handleCloseUserInfo} />}
    </ModalWrapper>
  );
};