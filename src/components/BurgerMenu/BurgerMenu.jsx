import { NameStyled } from 'components/UserLogo/UserLogoStyled';
import { Navigation, ThemeButton } from 'components';
import { useMediaRules } from 'hooks/useMediaRules';
import { BurgerMenuContainer } from './BurgerMenu.styled';

export const BurgerMenu = ({ isBurgerMenuShown, toggleFn }) => {
  const { isMobile } = useMediaRules();
  return (
    <>
      {/* Решта вашого коду для компонентів, якщо вони є */}
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
