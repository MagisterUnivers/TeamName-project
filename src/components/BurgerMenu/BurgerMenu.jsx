import { Navigation, ThemeButton } from 'components';
import { useMediaRules } from 'hooks';
import { NameStyled } from 'components/UserLogo/UserLogoStyled';
import { BurgerMenuContainer } from './BurgerMenu.styled';

export const BurgerMenu = ({ isBurgerMenuShown, toggleFn }) => {
  const { isMobile } = useMediaRules();
  return (
    <>
      <BurgerMenuContainer showBurgerMenu={isBurgerMenuShown}>
        <Navigation onClick={toggleFn} />
        {isMobile && (
          <div className="themeWrp">
            <NameStyled>Перемкнути тему: </NameStyled>
            <ThemeButton externalFn={toggleFn} />
          </div>
        )}
      </BurgerMenuContainer>
    </>
  );
};
