import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
  position: fixed;
  z-index: 100;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const HeaderWrp = styled.div`
  max-width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
   
  }

  @media screen and (min-width: 1440px) {
    /* max-width: 1440px; */
    /* padding: 22px 100px; */
  }
`;

export const UserLogoWrp = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

// export const BurgerMenuButton = styled.button`
//   width: 32px;
//   height: 32px;
//   border: none;
//   background-color: transparent;
//   cursor: pointer;
// `;
