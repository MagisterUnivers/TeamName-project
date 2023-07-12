import React from 'react';
import { NameStyled, UserAvatar, UserAvatarWrp, UserLogoWrp } from './UserLogoStyled';



const UserLogo = () => {
  return (
    <UserLogoWrp>
       <UserAvatarWrp>
       <UserAvatar src={process.env.PUBLIC_URL + '/images/user_plug.png' } alt="avatar" />
       </UserAvatarWrp>
      <NameStyled>Name</NameStyled>
    </UserLogoWrp>
  )
};

export default UserLogo;
