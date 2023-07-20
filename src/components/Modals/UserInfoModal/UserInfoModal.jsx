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
} from './UserInfoModal.styled';
import {
  StyledError,
  StyledMessage,
} from 'components/RegisterForm/RegisterForm.styled';
import { updateUserThunk } from 'redux/UserInfo/userOperations';
import XIcon from './x.svg';
import AddIcon from './add_photo.svg';
// import { updateUserThunk } from 'redux/Auth/authOperations';

const UserInfoModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserArray);
  const [isOpen, setIsOpen] = useState(true);
  const [isUpdateForm, setIsUpdateForm] = useState(null);

  useEffect(() => {
    if (isUpdateForm) {
      setIsUpdateForm(null);
    }
  }, [isUpdateForm]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        // onClose();
        setIsOpen(false)
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleModalClick = e => {
    const closeButtonClicked = e.target.closest('.close-button');
    const modalContentClicked = e.target.closest('.modal-content');

    if (closeButtonClicked || modalContentClicked === null) {
      // onClose();
    }  
    setIsOpen(false)
      e.stopPropagation();
  };
  console.log(user.name);
  console.log(user.avatarURL);
  return isOpen ? (
    <ModalWrapper onClick={handleModalClick}>
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
            formData.append('avatarURL', values.avatarURL);
            await dispatch(updateUserThunk(formData));
          }}
                >
          {({ errors, touched, handleChange, setFieldTouched }) => (
            <StyledFormInsight>
              <UserAvatarWrapper>
                <AvatarFrame src={user.avatarURL} alt="avatar" />
                <AddAvatarButton src={AddIcon} alt="plus" width={28} />
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

export default UserInfoModal;
