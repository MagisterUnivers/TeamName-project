import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserArray } from 'redux/selectors';
import { UserLogoModal } from 'components';
import {
  NameStyled,
  UserAvatar,
  UserAvatarWrp,
  UserLogoWrp,
} from './UserLogoStyled';

export const UserLogo = () => {
  const [showUserLogoModal, setShowUserLogoModal] = useState(false);
  const [editProfileShown, setEditProfileShown] = useState(false);
  const user = useSelector(selectUserArray);

  return (
    <UserLogoWrp onClick={() => setShowUserLogoModal(!showUserLogoModal)}>
      <UserAvatarWrp>
        <UserAvatar
          src={
            user?.avatarURL || require('../../assets/img/useravatar_plug.png')
          }
          alt="avatar"
        />
      </UserAvatarWrp>
      <NameStyled>{user?.name || 'no Name'}</NameStyled>
      {(showUserLogoModal || editProfileShown) && (
        <UserLogoModal
          setEditProfileShown={setEditProfileShown}
          setShowUserLogoModal={setShowUserLogoModal}
        />
      )}
    </UserLogoWrp>
  );
};
