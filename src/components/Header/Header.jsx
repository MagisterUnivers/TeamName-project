import { useMediaRules } from 'hooks/useMediaRules';
import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderWrp,
  UserLogoWrp,
} from './HeaderStyled';

import { Navigation, Logo, UserLogo, BurgerMenu, BurgerMenuButton } from 'components';

export const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const { isDesktop } = useMediaRules();
  console.log(isDesktop);

  const toggleBurgerMenu = () => setShowBurgerMenu(!showBurgerMenu);

  return (
    <HeaderWrp>
      <HeaderContainer>
        <Logo />
        {isDesktop && <Navigation />}
        <UserLogoWrp>
          <UserLogo />
          {!isDesktop && (
            <BurgerMenuButton
              showBurgerMenu={showBurgerMenu}
              onClose={toggleBurgerMenu}
            />
          )}
        </UserLogoWrp>
      </HeaderContainer>
      <BurgerMenu showBurgerMenu={showBurgerMenu} />
    </HeaderWrp>
  );
};

