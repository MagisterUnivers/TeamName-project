// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectUser } from 'redux/selectors';
// import {
//   NameStyled,
//   UserAvatar,
//   UserAvatarWrp,
//   UserLogoWrp,
// } from './UserLogoStyled';
// import { UserLogoModal } from 'components';

// export const UserLogo = () => {
//   const [showUserLogoModal, setShowUserLogoModal] = useState(false);
//   const user = useSelector(selectUser);
//   const handleClickUserLogoWrp = () => {
//     setShowUserLogoModal(!showUserLogoModal);
//   };

//   return (
//     <UserLogoWrp onClick={handleClickUserLogoWrp}>
//       <UserAvatarWrp>
//         <UserAvatar src={user?.avatar} alt="avatar" />
//       </UserAvatarWrp>
//       <NameStyled>{user?.name || 'no Name'}</NameStyled>
//       {showUserLogoModal && (
//         <UserLogoModal onClose={() => setShowUserLogoModal(false)} />
//       )}
//     </UserLogoWrp>
//   );
// };


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
  const [editProfileShown, setEditProfileShown] = useState(false);
  const user = useSelector(selectUser);

  return (
    <UserLogoWrp onClick={() => setShowUserLogoModal(!showUserLogoModal)}>
      <UserAvatarWrp>
        <UserAvatar
          // src={user?.avatar  require('../../assets/img/useravatar_plug.png')} 
                  alt="avatar"
        />
      </UserAvatarWrp>
      <NameStyled>{user?.name || 'no Name'}</NameStyled>
      {(showUserLogoModal || editProfileShown) && (
        <UserLogoModal setEditProfileShown={setEditProfileShown} />
      )}
    </UserLogoWrp>
  );
};
