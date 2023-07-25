import { styled } from 'styled-components';

export const BurgerMenuContainer = styled.div`
  background-color: ${props => props.theme.bgrColor};
  min-width: 100%;
  height: calc(100vh - 72px);
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${props =>
    props.isShown ? 'translateY(0px)' : 'translateY(-100%)'};
  transition: transform 1.5s;

  .themeWrp {
    display: flex;
    align-items: center;
    gap: 8px;
    position: absolute;
    top: 20px;
    right: 25px;
  }
`;
