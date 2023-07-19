import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from 'redux/selectors';
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
} from './UserInfoModal.styled';
import {
  StyledError,
  StyledIconChecked,
  StyledMessage,
  StyledIconError,
} from 'components/RegisterForm/RegisterForm.styled';
import { updateUserThunk } from 'redux/UserInfo/userOperations';
import XIcon from './x.svg';
import AddIcon from './add_photo.svg';
// import { updateUserThunk } from 'redux/Auth/authOperations';

const UserInfoModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);

  const handleModalClick = e => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };
  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };
  const handleInputFocus = e => {
    e.stopPropagation();
  };
  console.log(user.avatarURL);
  return (
    <ModalWrapper onClick={handleModalClick} onKeyDown={handleKeyDown}>
      <ContentWrapper>
        <CloseButton onClick={onClose}>
          <img src={XIcon} alt="Close" width={24} />
        </CloseButton>
        <StyledForm
          initialValues={{
            avatarURL: user?.avatarURL || '',
            name: user?.name || '',
          }}
          validationSchema={Yup.object({
            avatarURL: Yup.string(),
            name: Yup.string().matches(
              /^[a-zA-Zа-яєїієґҐА-ЯЄЇІЄҐҐ'0-9]+$/,
              'Name can only contain letters or numbers.'
            ),
          })}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(updateUserThunk(values));
            setSubmitting(false);
          }}
        >
          {({ errors, touched, handleChange, setFieldTouched }) => (
            <StyledFormInsight>
              <UserAvatarWrapper>
                <AvatarFrame src={user.avatar} alt="avatar" />
                <AddAvatarButton src={AddIcon} alt="plus" width={28} />
              </UserAvatarWrapper>
              <StyledInput
                type="text"
                name="name"
                placeholder="Name"
                onChange={e => {
                  setFieldTouched('name');
                  handleChange(e);
                }}
                onFocus={handleInputFocus}
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
              <SaveChangeButton type="submit">Save changes</SaveChangeButton>
            </StyledFormInsight>
          )}
        </StyledForm>
      </ContentWrapper>
    </ModalWrapper>
  );
};

export default UserInfoModal;
