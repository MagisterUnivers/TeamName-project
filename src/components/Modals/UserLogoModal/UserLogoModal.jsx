import React from 'react';
import { ReactComponent as iconEdit } from '../../../assets/icons/edit.svg';
import { InputWrp, ModalBody, Overlay, getStyledIcon } from './UserLogoModal.styled';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';

export const UserLogoModal = () => {

  const StyledIconEdit = getStyledIcon(iconEdit)

  return (
   <Overlay>
    <ModalBody>
      <InputWrp>
      Edit profile
      <StyledIconEdit/>
      </InputWrp>
      <LogoutBtn/>
    </ModalBody>
   </Overlay>


  )
};


