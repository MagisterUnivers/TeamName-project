import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { ModalWrapper, CloseButton, UserAvatarWrapper, ContentWrapper, AvatarFrame, AddAvatarButton, StyledFormInsight, StyledForm, StyledIconError, StyledIconChecked } from './UserInfoModal.styled';
import { StyledError, StyledInput, StyledInputWrap, StyledMessage } from 'components/RegisterForm/RegisterForm.styled';
import { updateUserThunk} from 'redux/UserInfo/userOperations';
import { selectUserInfoAvatar, selectUserInfoName } from 'redux/selectors';

const UserInfoModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const UserName = useSelector(selectUserInfoName);
  const UserAvatar = useSelector(selectUserInfoAvatar);

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <ModalWrapper onClick={handleModalClick} onKeyDown={handleKeyDown}>
      <ContentWrapper>
         <CloseButton onClick={onClose}>
        <img src="../../../../public/images/close.svg" alt="Close" />
      </CloseButton>
      <StyledForm
            initialValues={{
             avatarURL: UserAvatar || '', 
             name: UserName || '',
                 }}
                 validationSchema={Yup.object({
                  avatarURL: Yup.string(),
                  name: Yup.string()
          .matches(
            /^[a-zA-Zа-яА-Я0-9]+$/,
            'Name can only contain letters or numbers.'
          ),
                })}
                onSubmit={values => {
                  dispatch(updateUserThunk(values));
                }}         
      >
        {({ errors, touched }) => (
      <StyledFormInsight>
      <UserAvatarWrapper>
    <AvatarFrame src='' alt="avatar"/>
    <AddAvatarButton/>
      </UserAvatarWrapper>
          <StyledInputWrap>
              <StyledInput
                type="text"
                name="name"
                placeholder="Name"
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

            </StyledFormInsight>)}
            </StyledForm>
      </ContentWrapper>
    </ModalWrapper>
  );
};

export default UserInfoModal;
