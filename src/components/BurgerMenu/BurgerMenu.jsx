import Logo from 'components/Logo/Logo';
import { BurgerMenuContainer, CloseButton, HeaderWrp, UserLogoWrp } from './BurgerMenuStyled';
import UserLogo from 'components/UserLogo/UserLogo';
import Navigation from 'components/Navigation/Navigation';


const BurgerMenu = ({onClose}) => {
  return (
    <BurgerMenuContainer>
      <HeaderWrp>
        <Logo />
        <UserLogoWrp>
          <UserLogo />
          <CloseButton onClick={onClose}>
            <svg width="32px" height="32px">
              <use href={process.env.PUBLIC_URL + '/images/close.svg'}></use>
            </svg>
          </CloseButton>
        </UserLogoWrp>
      </HeaderWrp>
      <Navigation />
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
