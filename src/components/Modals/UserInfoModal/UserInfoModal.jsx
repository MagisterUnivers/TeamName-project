import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserArray } from 'redux/selectors';
import { UpdateUserSchema } from 'components';
import { updateUserThunk } from 'redux/UserInfo/userOperations';
import AddIcon from '../../../assets/icons/modals/user-info/add_photo.svg';
import {
  StyledError,
  StyledMessage,
} from 'components/Forms/RegisterForm/RegisterForm.styled';
import {
  ModalWrapper,
  CloseButton,
  UserAvatarWrapper,
  ContentWrapper,
  AvatarFrame,
  StyledFormInsight,
  StyledForm,
  SaveChangeButton,
  StyledInput,
  StyledInputWrap,
  StyledIconChecked,
  StyledIconError,
  AddIconImg,
  StyledInputFile,
  StyledUpdatedCloseButton,
} from './UserInfoModal.styled';
const defaultAvatarURL = require('../../../assets/img/modals/user-info/user.png');

export const UserInfoModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserArray);
  const [isOpen, setIsOpen] = useState(true); //eslint-disable-line
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [imgURL, setImageURL] = useState('');

  useEffect(() => {
    const handleOutsideClick = event => {
      if (!event.target.closest('.modal-content')) {
        onClose();
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  const handleAvatarChange = async e => {
    const file = e.target.files[0];
    setSelectedAvatar(file);
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImageURL(reader.result);
    });
    reader.readAsDataURL(file);
  };

  const handleOnSubmit = async values => {
    const formData = new FormData();
    formData.append('name', values.name);
    if (selectedAvatar) {
      formData.append('avatarURL', selectedAvatar);
    }
    const res = await dispatch(updateUserThunk(formData));
    if (res.meta.requestStatus === 'fulfilled') {
      onClose();
    }
  };

  let avatar;
  if (imgURL) {
    avatar = imgURL;
  } else if (user.avatarURL) {
    avatar = user.avatarURL;
  } else {
    avatar = defaultAvatarURL;
  }

  return isOpen ? (
    <ModalWrapper>
      <ContentWrapper className="modal-content">
        <CloseButton onClick={onClose} tabIndex={1} className="close-button">
          <StyledUpdatedCloseButton />
        </CloseButton>
        <StyledForm
          initialValues={{
            avatarURL: '',
            name: user.name || '',
          }}
          validationSchema={UpdateUserSchema}
          onSubmit={handleOnSubmit}
        >
          {({ errors, touched, handleChange, setFieldTouched }) => (
            <StyledFormInsight>
              <UserAvatarWrapper>
                <AvatarFrame src={avatar} alt="avatar" width={100} />
                <label htmlFor="avatarInput">
                  <AddIconImg src={AddIcon} alt="plus" width={28} />
                  <StyledInputFile
                    type="file"
                    id="avatarInput"
                    accept="image/*"
                    onChange={handleAvatarChange}
                  />
                </label>
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
