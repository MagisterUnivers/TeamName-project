import { useMediaRules } from 'hooks/useMediaRules';
import { useEffect, useState } from 'react';
import {
  Navigation,
  Logo,
  UserLogo,
  BurgerMenu,
  BurgerMenuButton,
  ThemeButton,
} from 'components';
import {
  HeaderContainer,
  StyledHeader,
  StyledHeaderWrp,
  UserLogoWrp,
} from './HeaderStyled';
import useBodyScroll from 'hooks/useBodyScroll';

export const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const { isDesktop, isMobile } = useMediaRules();
  // console.log(isDesktop);

  const toggleBurgerMenu = () => setShowBurgerMenu(!showBurgerMenu);

  useBodyScroll(showBurgerMenu);
  return (
    <>
      <StyledHeader>
        <StyledHeaderWrp>
          <HeaderContainer>
            <Logo />
            {isDesktop && <Navigation />}
            <UserLogoWrp>
              {!isMobile && <ThemeButton />}
              <UserLogo />
              {!isDesktop && (
                <BurgerMenuButton
                  showBurgerMenu={showBurgerMenu}
                  onClose={toggleBurgerMenu}
                />
              )}
            </UserLogoWrp>
          </HeaderContainer>
        </StyledHeaderWrp>
      </StyledHeader>
      {!isDesktop && <BurgerMenu showBurgerMenu={showBurgerMenu} />}
    </>
  );
};
