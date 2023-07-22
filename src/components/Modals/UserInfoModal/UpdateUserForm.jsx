import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserArray, selectAvatar } from 'redux/selectors';
import * as Yup from 'yup';
import {
  UserAvatarWrapper,
  AvatarFrame,
  AddAvatarButton,
  StyledFormInsight,
  StyledForm,
  SaveChangeButton,
  StyledInput,
  StyledInputWrap,
  StyledIconChecked,
  StyledIconError,
} from './UserInfoModal.styled';
import {
  StyledError,
  StyledMessage,
} from 'components/RegisterForm/RegisterForm.styled';
import { updateUserThunk } from 'redux/UserInfo/userOperations';
import AddIcon from './add_photo.svg';
import { AddIconImg } from './UserInfoModal.styled';
import { StyledInputFile } from './UserInfoModal.styled';

export const UpdateUserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserArray);
  const avatar = useSelector(selectAvatar);
//   const [isOpen, setIsOpen] = useState(true);
//   const [isUpdateForm, setIsUpdateForm] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState (null);
   
    const handleAvatarChange = e => {
      const file = e.target.files[0];
      setSelectedAvatar(file);
    };
  console.log(user);
  console.log(avatar);
  return  <StyledForm
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
                <AvatarFrame src={avatar} alt="avatar" />
                <AddAvatarButton>
                  <AddIconImg src={AddIcon} alt="plus" width={28} />
                </AddAvatarButton>
                <StyledInputFile
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    style={{ display: 'none' }}
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
        </StyledForm> };
