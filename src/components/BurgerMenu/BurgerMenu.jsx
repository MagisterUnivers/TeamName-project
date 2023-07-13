import { Logo } from 'components/Logo/Logo';
import {
  BurgerMenuContainer,
  CloseButton,
  HeaderWrp,
  UserLogoWrp,
} from './BurgerMenuStyled';
import UserLogo from 'components/UserLogo/UserLogo';
import Navigation from 'components/Navigation/Navigation';

const BurgerMenu = ({ onClose }) => {
  return (
    <BurgerMenuContainer>
      <HeaderWrp>
        <Logo />
        <UserLogoWrp>
          <UserLogo />
          <CloseButton onClick={() => onClose()}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 8L8 24"
                stroke="#F3F3F3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 8L24 24"
                stroke="#F3F3F3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </CloseButton>
        </UserLogoWrp>
      </HeaderWrp>
      <Navigation />
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
