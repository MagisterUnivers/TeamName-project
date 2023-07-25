import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutThunk } from 'redux/Auth/authOperations';
import { clearState } from 'redux/UserInfo/userInfoSlice';
import { selectTheme } from 'redux/selectors';
import XIcon from './x.svg';
import XIconBlack from '../../../assets/icons/close.svg';
import {
  ModalWrapper,
  ModalContent,
  LogOutButton,
  CloseButton,
  ModalText,
  ButtonWrapper,
} from './ConfirmLogout.styled';

export const ConfirmLogout = ({ id, onClose }) => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(res => {
        if (res && res.status === 200) {
          navigate('/');
          dispatch(clearState());
        }
      })
      .then(Notiflix.Notify.success('The user log out successfully!'));
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <img
            src={theme === 'dark' ? XIcon : XIconBlack}
            alt="Close"
            width={24}
          />
        </CloseButton>
        <ModalText>Are you sure you want to log out?</ModalText>
        <ButtonWrapper>
          <LogOutButton onClick={handleDelete}>Log out</LogOutButton>
          <LogOutButton onClick={onClose}>Cancel</LogOutButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalWrapper>
  );
};
