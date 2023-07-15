import { NameStyled } from 'components/UserLogo/UserLogoStyled';
import { BurgerMenuContainer } from './BurgerMenu.styled';
import { Navigation, ThemeButton } from 'components';
import { useMediaRules } from 'hooks/useMediaRules';

export const BurgerMenu = ({ showBurgerMenu }) => {
  const { isMobile } = useMediaRules();
  return (
    <BurgerMenuContainer showBurgerMenu={showBurgerMenu}>
      <Navigation />
      {isMobile && (
        <div className="themeWrp">
          <NameStyled>Switch Theme: </NameStyled>
          <ThemeButton />
        </div>
      )}
    </BurgerMenuContainer>
  );
};
