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
  @media screen and (min-width: 1440px) {
    padding-left: 300px;
  }
`;

export const PicturedWrapper = styled.img`
  position: relative;
  margin-left: auto;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const SummaryWrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 36px;
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
    left: 15%;
    transform: translate(0%, -50%);
    width: 335px;
    height: 248px;
    padding: 0;
    margin-top: 400px;
    margin-left: 64px;
    justify-content: left;  
    align-items: left;
  }
  @media screen and (min-width: 1440px) {
    top: 0%;
    left: -30%;
    transform: translate(0%, -50%);
    width: 335px;
    height: 248px;
    padding: 0;
    margin-top: 400px;
    margin-left: 64px;
    margin-left: 737px;
  }
`;
export const WelcomeTitle = styled.h1`
  color: #FAFAFA;;
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
  }
`;
export const WelcomeText = styled.p`
  color: #FAFAFA;;
  /* text-align: center; */
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
  /* margin-top: 24px; */
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
&:hover {
    text-decoration: underline;   }
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
  border: 1px solid rgba(243, 243, 243, 0.20);
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 1.28;
&:hover {
    text-decoration: underline;   }
    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.28;
        padding: 18px 44px;
  }
`;

