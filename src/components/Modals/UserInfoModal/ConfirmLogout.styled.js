import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
  width: 177px;
height: 134px;
  margin: 0;
  padding: 0;
  /* @media screen and (min-width: 768px) {
    width: 500px;
    height: 426px;
  } */
`;
export const ModalText = styled.h1`
color: var(--main-text-color);
text-align: center;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 1.29; 
letter-spacing: -0.28px;
  /* @media screen and (min-width: 768px) {
    width: 500px;
    height: 426px;
  } */
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
export const CancelButton = styled.button`
  display: block;
  padding: 12px 45px;
  margin-top: 20px;
  border-radius: 42px;
  background-color: var(--main-text-color);
  color: var(--btn-hover-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;
  transition: box-shadow 0.3s ease;
  &:hover {
    text-decoration: underline;
    box-shadow: 1px 0px 3px 4px rgba(35, 93, 171, 0.4) inset;
  }
`;

export const LogOutLink = styled(NavLink)`
  display: block;
  padding: 12px 45px;
  margin-top: 20px;
  border-radius: 42px;
  background-color: var(--main-text-color);
  color: var(--btn-hover-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;
  transition: box-shadow 0.3s ease;
  &:hover {
    text-decoration: underline;
    box-shadow: 1px 0px 3px 4px rgba(35, 93, 171, 0.4) inset;
  }
`;