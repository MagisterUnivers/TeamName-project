import React, { useState } from 'react';
import {
  NameStyled,
  UserAvatar,
  UserAvatarWrp,
  UserLogoWrp,
} from './UserLogoStyled';
import { UserLogoModal } from 'components';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';

export const UserLogo = () => {
  const [showUserLogoModal, setShowUserLogoModal] = useState(false);
  const user = useSelector(selectUser);
  


  return (
    <UserLogoWrp onClick={()=> setShowUserLogoModal(!showUserLogoModal)}>
       <UserAvatarWrp>
       <UserAvatar src={user?.avatar || 'useravatar_plug.png'} alt="avatar" />
       </UserAvatarWrp>
      <NameStyled>{user?.name || 'no Name'}</NameStyled>
      {showUserLogoModal && <UserLogoModal/>}
    </UserLogoWrp>
  );
};
