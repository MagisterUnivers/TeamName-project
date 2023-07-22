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
  AddIconImg,
  StyledInputFile
} from './UserInfoModal.styled';
import {
  StyledError,
  StyledMessage,
} from 'components/RegisterForm/RegisterForm.styled';
import { updateUserThunk } from 'redux/UserInfo/userOperations';
import XIcon from './x.svg';
import AddIcon from './add_photo.svg';

export const UserInfoModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userInfo.user);
  const [isOpen, setIsOpen] = useState(true);
   const [selectedAvatar, setSelectedAvatar] = useState(null);
  useEffect(() => {
    const handleOutsideClick = event => {
      if (!event.target.closest('.modal-content')) {
        console.log('closing modal');
        onClose();
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    setSelectedAvatar(file);
  };

  return isOpen ? (
    <ModalWrapper>
      <ContentWrapper className="modal-content">
        <CloseButton onClick={onClose} tabIndex={1} className="close-button">
          <img src={XIcon} alt="Close" width={24} />
        </CloseButton>
        <StyledForm
          initialValues={{
            avatarURL: '',
            name: user.name || '',
          }}
          validationSchema={Yup.object({
            avatarURL: Yup.string(),
            name: Yup.string().matches(
              /^[a-zA-Zа-яєїієґҐА-ЯЄЇІЄҐҐ'0-9]+$/,
              'Name can only contain letters or numbers.'
            ),
          })}
          onSubmit={async values => {
            const formData = new FormData();
            formData.append('name', values.name);
            if (selectedAvatar) {
              formData.append('avatar', selectedAvatar);
            }
            await dispatch(updateUserThunk(formData));
          }}
        >
          {({ errors, touched, handleChange, setFieldTouched }) => (
            <StyledFormInsight>
              <UserAvatarWrapper>
              <label htmlFor="avatarInput">
                <AvatarFrame src={user.avatarURL || require('./user.svg')} alt="avatar" />
               
                  <AddAvatarButton type="button">
                    <AddIconImg src={AddIcon} alt="plus" width={28} />
                  </AddAvatarButton>
                </label>
                <StyledInputFile
                  type="file"
                  id="avatarInput"
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
              </UserAvatarWrapper>
              <StyledInputWrap>
                <StyledInput
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={e => {
                    setFieldTouched('name');
                    handleChange(e);
                  }}
                  className={
                    touched.name && !errors.name
                      ? 'valid-border'
                      : errors.name && touched.name
                      ? 'invalid-border'
                      : ''
                  }
                />
                {errors.name && touched.name && (
                  <div>
                    <StyledIconError color="red" />{' '}
                    <StyledError name="name" component="div" />
                  </div>
                )}
                {touched.name && !errors.name && (
                  <div>
                    <StyledIconChecked color="green" />{' '}
                    <StyledMessage>This is an CORRECT name</StyledMessage>
                  </div>
                )}
              </StyledInputWrap>
              <SaveChangeButton type="submit">Save changes</SaveChangeButton>
            </StyledFormInsight>
          )}
        </StyledForm>
      </ContentWrapper>
    </ModalWrapper>
  ) : null;
};
