// import { UserLogoModal } from 'components';
// {тимчасово підключила свою модалку, з логікою виконання. Олена};
// import EditProfileModal from 'components/Modals/UserInfoModal/EditProfileModal';
// import {
//   NameStyled,
//   UserAvatar,
//   UserAvatarWrp,
//   UserLogoWrp,
// } from './UserLogoStyled';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import {
  NameStyled,
  UserAvatar,
  UserAvatarWrp,
  UserLogoWrp,
} from './UserLogoStyled';
import { UserLogoModal } from 'components';

export const UserLogo = () => {
  const [showUserLogoModal, setShowUserLogoModal] = useState(false);
  const user = useSelector(selectUser);
  const handleClickUserLogoWrp = () => {
    setShowUserLogoModal(!showUserLogoModal);
  };

  return (
    <UserLogoWrp onClick={handleClickUserLogoWrp}>
      <UserAvatarWrp>
        <UserAvatar src={user?.avatar || useravatar_plug} alt="avatar" />
      </UserAvatarWrp>
      <NameStyled>{user?.name || 'no Name'}</NameStyled>
      {showUserLogoModal && (
        <UserLogoModal onClose={() => setShowUserLogoModal(false)} />
      )}
    </UserLogoWrp>
  );
};
