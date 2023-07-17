import { useMediaRules } from 'hooks/useMediaRules';
import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderWrp,
  UserLogoWrp,
} from './HeaderStyled';

import { Navigation, Logo, UserLogo, BurgerMenu, BurgerMenuButton, ThemeButton } from 'components';
import Counter from 'components/RecipeIngredientsFields/Counter/Counter';

export const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const { isDesktop, isMobile } = useMediaRules();
  console.log(isDesktop);

  const toggleBurgerMenu = () => setShowBurgerMenu(!showBurgerMenu);

  return (
    <>
      {' '}
      <HeaderWrp>
        <HeaderContainer>
          <Logo />
          {isDesktop && <Navigation />}
          <UserLogoWrp>
         {!isMobile && <ThemeButton/>}
            <UserLogo />
            {!isDesktop && (
              <BurgerMenuButton
                showBurgerMenu={showBurgerMenu}
                onClose={toggleBurgerMenu}
              />
            )}
          </UserLogoWrp>
        </HeaderContainer>
      </HeaderWrp>{' '}
     {!isDesktop && <BurgerMenu showBurgerMenu={showBurgerMenu}/>}
    </>
  );
};

