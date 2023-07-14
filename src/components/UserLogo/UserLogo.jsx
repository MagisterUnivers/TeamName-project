import React from 'react';
import { NameStyled, UserAvatar, UserAvatarWrp, UserLogoWrp } from './UserLogoStyled';



export const UserLogo = () => {
  return (
    <UserLogoWrp>
       <UserAvatarWrp>
       <UserAvatar src='useravatar_plug.png' alt="avatar" />
       </UserAvatarWrp>
      <NameStyled>Name</NameStyled>
    </UserLogoWrp>
  )
};


