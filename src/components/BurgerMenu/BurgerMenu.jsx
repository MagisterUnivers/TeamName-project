import { BurgerMenuContainer} from './BurgerMenu.styled';
import Navigation from 'components/Navigation/Navigation';


const BurgerMenu = ({showBurgerMenu}) => {
  
  return (
    <BurgerMenuContainer showBurgerMenu={showBurgerMenu}>
      <Navigation />
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
