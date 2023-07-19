import React, { useState } from 'react';
import {
  NameStyled,
  UserAvatar,
  UserAvatarWrp,
  UserLogoWrp,
} from './UserLogoStyled';

import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import UserLogoModal from 'components/Modals/UserLogoModal/UserLogoModal';

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
