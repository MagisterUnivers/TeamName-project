import styled from 'styled-components';

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: var(--btn-hover-color);
  border-radius: 8px;
  width: 177px;
  height: 134px;
  margin: 2px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ChangeProfileButton = styled.button`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0;
  width: 171px;
  height: 18px;
  padding: 18px;
  border: none;
  border-radius: 42px;
  background-color: transparent;
  cursor: pointer;
  color: var(--main-text-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.29;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 1px 0px 3px 4px rgba(35, 93, 171, 0.4) inset;
  }
`;
export const LogOutButton = styled.button`
  display: block;
  padding: 12px 45px;
  margin-top: 20px; 
  border-radius: 42px;
  background-color: #434D67;
  color: var(--main-text-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;
  transition: background-color 0.5s ease;
  &:hover {
       /* box-shadow: 1px 0px 3px 4px rgba(35, 93, 171, 0.4) inset; */
    background-color: var(--main-text-color);
  color: var(--btn-hover-color);
  }
  `;