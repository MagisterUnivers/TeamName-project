import React from 'react';
import { BurgerMenuButtonStyled, getStyledIcon } from './Button.styled';
import { ReactComponent as iconClose } from '../../../assets/icons/close.svg'
import { ReactComponent as iconBurger} from '../../../assets/icons/burger-menu.svg'
const BurgerMenuButton = ({ showBurgerMenu, onClose }) => {

  const StyledIconClose = getStyledIcon(iconClose);
  const StyledIconBurger = getStyledIcon(iconBurger);
 
  return (
    <BurgerMenuButtonStyled onClick={onClose}>
      {showBurgerMenu ? <StyledIconClose/> : <StyledIconBurger/>}
    </BurgerMenuButtonStyled>
  );
};

export default BurgerMenuButton;
