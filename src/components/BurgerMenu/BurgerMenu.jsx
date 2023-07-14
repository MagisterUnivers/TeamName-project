import { BurgerMenuContainer} from './BurgerMenu.styled';
import {Navigation} from 'components';


export const BurgerMenu = ({showBurgerMenu}) => {
  
  return (
    <BurgerMenuContainer showBurgerMenu={showBurgerMenu}>
      <Navigation />
    </BurgerMenuContainer>
  );
};


