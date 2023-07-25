import { NameStyled } from 'components/UserLogo/UserLogoStyled';
import { Navigation, ThemeButton } from 'components';
import { useMediaRules } from 'hooks';
import { BurgerMenuContainer } from './BurgerMenu.styled';

export const BurgerMenu = ({ showBurgerMenu, toggleFn }) => {
  const { isMobile } = useMediaRules();
  return (
    <BurgerMenuContainer showBurgerMenu={showBurgerMenu}>
      <Navigation onClick={toggleFn} />
      {isMobile && (
        <div className="themeWrp">
          <NameStyled>Switch Theme: </NameStyled>
          <ThemeButton externalFn={toggleFn} />
        </div>
      )}
    </BurgerMenuContainer>
  );
};
