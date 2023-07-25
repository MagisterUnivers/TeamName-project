import { ReactComponent as iconClose } from '../../../assets/icons/close.svg';
import { ReactComponent as iconBurger } from '../../../assets/icons/burger-menu.svg';
import { BurgerMenuButtonStyled, getStyledIcon } from './Button.styled';
const StyledIconClose = getStyledIcon(iconClose);
const StyledIconBurger = getStyledIcon(iconBurger);

export const BurgerMenuButton = ({ showBurgerMenu, onClose }) => {
  return (
    <BurgerMenuButtonStyled onClick={onClose}>
      {showBurgerMenu ? <StyledIconClose /> : <StyledIconBurger />}
    </BurgerMenuButtonStyled>
  );
};
