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
import { UserLogoModal } from 'components';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import {
  NameStyled,
  UserAvatar,
  UserAvatarWrp,
  UserLogoWrp,
} from './UserLogoStyled';

export const UserLogo = () => {
  const [showUserLogoModal, setShowUserLogoModal] = useState(false);
  const user = useSelector(selectUser);

  return (
    <UserLogoWrp onClick={() => setShowUserLogoModal(!showUserLogoModal)}>
      <UserAvatarWrp>
        <UserAvatar
          src={user?.avatar || require('../../assets/img/useravatar_plug.png')}
          alt="avatar"
        />
      </UserAvatarWrp>
      <NameStyled>{user?.name || 'no Name'}</NameStyled>
      {showUserLogoModal && <UserLogoModal />}
    </UserLogoWrp>
  );
};
