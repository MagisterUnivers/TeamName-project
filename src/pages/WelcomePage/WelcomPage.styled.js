import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BaseDiv = styled.div`
  background-color: var(--main-bgr-color);
  width: 100%;
  height: 100%;
  margin: 0;
  padding-left: 36px;
  @media screen and (min-width: 768px) {
    padding-left: 64px;
  }
`; 

export const PicturedWrapper = styled.img`
  position: relative;
  margin-left: auto;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  .no-click {
  pointer-events: none;
  user-select: none;
}
`;
export const SummaryWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 5%;
  transform: translate(0%, -50%);
  z-index: 1;
  width: 335px;
  height: 248px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    top: 10%;
    left: 5%;
    transform: translate(0%, -50%);
    width: 470px;
    height: 248px;
    padding: 0;
    margin-top: 400px;
    margin-left: 64px;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media screen and (min-width: 1440px) {
    top: 0%;
    left: 5%;
    transform: translate(0%, -50%);
    width: 488px;
    height: 248px;
    margin-left: 64px;
  }
`;
export const WelcomeTitle = styled.h1`
  color: #fafafa;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: -0.56px;
  padding-bottom: 14px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    letter-spacing: -0.8px;
    text-align: left; 
  }
`;
export const WelcomeText = styled.p`
  color: #fafafa;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.28px;
  }
`;
export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;
export const RegistrationNavLink = styled(NavLink)`
  display: block;
  padding: 14px 40px;
  border-radius: 42px;
  background: var(--main-text-color);
  color: var(--btn-hover-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.13;
  transition: box-shadow 0.3s ease;
  &:hover {
    text-decoration: underline;
    box-shadow: 1px 0px 3px 4px rgba(35, 93, 171, 0.4) inset;
  }
   @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.28;
    padding: 18px 44px;
  }
`;
export const SignInNavLink = styled(NavLink)`
  display: block;
  padding: 14px 40px;
  border-radius: 42px;
  color: var(--main-text-color);
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
  transition: box-shadow 0.3s ease;
  &:hover {
    text-decoration: underline;
    box-shadow: 1px 0px 3px 4px rgba(35, 93, 171, 0.4) inset;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.28;
    padding: 18px 44px;
  }
`;
