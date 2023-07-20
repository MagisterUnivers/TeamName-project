import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { selectUserInfoAvatar, selectUserInfoName } from 'redux/selectors';
import XIcon from './x.svg';
import AddIcon from './add_photo.svg';

export const UserInfoModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const UserName = useSelector(selectUserInfoName);
  const UserAvatar = useSelector(selectUserInfoAvatar);

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

  return (
    <ModalWrapper onClick={handleModalClick} onKeyDown={handleKeyDown}>
      <ContentWrapper>
        <CloseButton onClick={onClose}>
          <img src={XIcon} alt="Close" width={24} />
        </CloseButton>
        <StyledForm
          initialValues={{
            avatarURL: UserAvatar || '',
            name: UserName || '',
          }}
          validationSchema={Yup.object({
            avatarURL: Yup.string(),
            name: Yup.string().matches(
              /^[a-zA-Zа-яєїієґҐА-ЯЄЇІЄҐҐ'0-9]+$/,
              'Name can only contain letters or numbers.'
            ),
          })}
          onSubmit={values => {
            dispatch(updateUserThunk(values));
          }}
        >
          {({ errors, touched, handleChange, setFieldTouched }) => (
            <StyledFormInsight>
              <UserAvatarWrapper>
                <AvatarFrame />
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
              <SaveChangeButton>Save changes</SaveChangeButton>
            </StyledFormInsight>
          )}
        </StyledForm>
      </ContentWrapper>
    </ModalWrapper>
  );
};
