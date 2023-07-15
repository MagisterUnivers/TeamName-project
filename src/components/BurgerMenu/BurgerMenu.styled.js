import { devices } from 'constants/breakpoints';
import { styled } from 'styled-components';



export const BurgerMenuContainer = styled.div`
  background-color:  #0A0A11;
  min-width: 100%;
  height: calc(100vh - 72px);
  position: relative;
  z-index: 90;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ showBurgerMenu }) => (showBurgerMenu ? 'translateY(72px)' : 'translateY(-100%)')};
  transition: transform 1.5s;

  .themeWrp {
    display: flex;
    align-items: center;
    gap: 8px;
    position: absolute;
    top: 20px;
    right: 25px;
    
  }

  @media ${devices.tablet} {
    transform: ${({ showBurgerMenu }) => (showBurgerMenu ? 'translateY(84px)' : 'translateY(-100%)')};
  }
`;

