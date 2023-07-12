import styled from 'styled-components';

export const HeaderContainer = styled.div`
border-bottom: 1px solid rgba(243, 243, 243, 0.2);

`

export const HeaderWrp = styled.div`
max-width: 375px;
padding: 20px;
display: flex;
align-items: center;
  justify-content: space-between;
`

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
