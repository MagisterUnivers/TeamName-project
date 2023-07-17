import React, { useState } from 'react';
import { NameStyled, UserAvatar, UserAvatarWrp, UserLogoWrp } from './UserLogoStyled';
// import { UserLogoModal } from 'components';
// {тимчасово підключила свою модалку, з логікою виконання. Олена};
import EditProfileModal from 'components/Modals/UserInfoModal/EditProfileModal';

export const UserLogo = () => {
  const [showUserLogoModal, setShowUserLogoModal] = useState(false);

  return (
    <UserLogoWrp onClick={() => setShowUserLogoModal(!showUserLogoModal)}>
      <UserAvatarWrp>
        <UserAvatar
          src={require('../../assets/img/useravatar_plug.png')}
          alt="avatar"
        />
      </UserAvatarWrp>
      <NameStyled>Name</NameStyled>
      {/* {showUserLogoModal && <UserLogoModal/>} тимчасово відключила цю модалку */}
      {showUserLogoModal && <EditProfileModal/>}
    </UserLogoWrp>
  );
};
