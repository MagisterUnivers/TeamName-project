import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserLogo from 'components/UserLogo/UserLogo';
import { useMediaRules } from 'hooks/useMediaRules';
import React, { useState } from 'react';
import {
  BurgerMenuButton,
  HeaderContainer,
  HeaderWrp,
  UserLogoWrp,
} from './HeaderStyled';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const { isDesktop } = useMediaRules();

  const openBurgerMenu = () => setShowBurgerMenu(true);
  const closeBurgerMenu = () => setShowBurgerMenu(false);

  return (
    <HeaderContainer>
      {showBurgerMenu && <BurgerMenu onClose={closeBurgerMenu}/>}
      <HeaderWrp>
        <Logo />
        {isDesktop && <Navigation />}
        <UserLogoWrp>
          <UserLogo />
          {!isDesktop && (
            <BurgerMenuButton onClick={openBurgerMenu}>
              <svg width="32px" height="32px">
                <use
                  href={process.env.PUBLIC_URL + '/images/burger-menu.svg'}
                ></use>
              </svg>
            </BurgerMenuButton>
          )}
        </UserLogoWrp>
      </HeaderWrp>
    </HeaderContainer>
  );
};

export default Header;
