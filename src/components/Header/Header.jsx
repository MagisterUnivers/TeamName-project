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
  console.log(isDesktop);

  const toggleBurgerMenu = () => setShowBurgerMenu(!showBurgerMenu);

  return (
    <HeaderContainer>
      {showBurgerMenu && <BurgerMenu onClose={toggleBurgerMenu} />}
      <HeaderWrp>
        <Logo />
        {isDesktop && <Navigation />}
        <UserLogoWrp>
          <UserLogo />
          {!isDesktop && (
            <BurgerMenuButton onClick={toggleBurgerMenu}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 13.3333H4"
                  stroke="#F3F3F3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28 8H4"
                  stroke="#F3F3F3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28 18.6667H4"
                  stroke="#F3F3F3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28 24H4"
                  stroke="#F3F3F3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </BurgerMenuButton>
          )}
        </UserLogoWrp>
      </HeaderWrp>
    </HeaderContainer>
  );
};

export default Header;
