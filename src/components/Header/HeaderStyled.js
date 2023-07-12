import styled from 'styled-components';

export const HeaderContainer = styled.div`
  border-bottom: 1px solid rgba(243, 243, 243, 0.2);
`;

export const HeaderWrp = styled.div`
  max-width: 100%;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    /* max-width: 768px; */
    padding: 20px 32px;
  }

  @media screen and (min-width: 1440px) {
    /* max-width: 1440px; */
    padding: 22px 100px;
  }
`;

export const UserLogoWrp = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const BurgerMenuButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
