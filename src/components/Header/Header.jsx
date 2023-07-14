import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserLogo from 'components/UserLogo/UserLogo';
import { useMediaRules } from 'hooks/useMediaRules';
import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderWrp,
  UserLogoWrp,
} from './HeaderStyled';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import BurgerMenuButton from 'components/BurgerMenu/Button/Button';

const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const { isDesktop } = useMediaRules();
  console.log(isDesktop);

  const toggleBurgerMenu = () => setShowBurgerMenu(!showBurgerMenu);

  return (
    <HeaderContainer>
      <HeaderWrp>
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
      </HeaderWrp>
      {showBurgerMenu && <BurgerMenu showBurgerMenu={showBurgerMenu} />}
    </HeaderContainer>
  );
};

export default Header;
