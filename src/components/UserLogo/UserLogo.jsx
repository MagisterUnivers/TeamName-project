import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser, selectUserArray } from 'redux/selectors';
import {
  NameStyled,
  UserAvatar,
  UserAvatarWrp,
  UserLogoWrp,
} from './UserLogoStyled';
import { UserLogoModal } from 'components';

export const UserLogo = () => {
  const [showUserLogoModal, setShowUserLogoModal] = useState(false);
  const [editProfileShown, setEditProfileShown] = useState(false);
  // const user = useSelector(selectUser);
  const user = useSelector(selectUserArray);

  return (
    <UserLogoWrp onClick={() => setShowUserLogoModal(!showUserLogoModal)}>
      <UserAvatarWrp>
        <UserAvatar
          src={user?.avatarURL || require('../../assets/img/useravatar_plug.png')}
          alt="avatar"
        />
      </UserAvatarWrp>
      <NameStyled>{user?.name || 'no Name'}</NameStyled>
      {(showUserLogoModal || editProfileShown) && (
        <UserLogoModal setEditProfileShown={setEditProfileShown} />
      )}
    </UserLogoWrp>
  );};