import styled from 'styled-components';

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);;
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
  width: 335px;
height: 193px;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 215px;

  }
`;

export const CloseButton = styled.button`
margin-top: 14px;
margin-left: 297px;
margin-bottom: 12px;
   background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    margin-top: 18px;
margin-left: 450px;
margin-right: 0;
  }
`;
export const ModalText = styled.h1`
color: var(--main-text-color);
text-align: center;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.29; 
letter-spacing: -0.28px;
margin-bottom: 25px;
@media screen and (min-width: 768px) {
  font-size: 18px;
  line-height: 1.33; 
  }
`;

export const ButtonWrapper = styled.div`
width: 285px;
display: flex;
align-items: center;
justify-content: space-between;
  margin: 25px;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 400px;
    margin-top: 12px;
    margin-left: 50px;
  }
`;
export const LogOutButton = styled.button`
  display: block;
  padding: 16px 41px;
  border-radius: 42px;
  background-color: #434D67;
  color: var(--main-text-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.13;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: var(--main-text-color);
  color: var(--btn-hover-color);
  }
  @media screen and (min-width: 768px) {
    padding: 18px 69px;
  }
`;

