import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import cocktailIMGMOB from '../../assets/img/welcome-page/cocktailMob.webp';
import cocktailIMGMOBR from '../../assets/img/welcome-page/cocktailMob@2x.webp';

import cocktailIMGTAB from '../../assets/img/welcome-page/cocktailTab.webp';
import cocktailIMGTABR from '../../assets/img/welcome-page/cocktailTab@2x.webp';

import cocktailIMGDESC from '../../assets/img/welcome-page/cocktailDesc.webp';
import cocktailIMGDESCR from '../../assets/img/welcome-page/cocktailDesc@2x.webp';
import { devices } from 'constants';

export const BaseDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-size: contain;
  justify-content: center;
  align-items: center;
  background-image: url(${cocktailIMGMOB});
  background-position: right;
  background-repeat: no-repeat;
  @media ${devices.retina} {
    background-image: url(${cocktailIMGMOBR});
  }
  @media ${devices.tablet} {
    background-image: url(${cocktailIMGTAB});

    justify-content: left;
    padding-left: 64px;
    @media ${devices.retina} {
      background-image: url(${cocktailIMGTABR});
    }
  }
  @media ${devices.desktop} {
    background-image: url(${cocktailIMGDESC});
    background-color: #07070b;
    justify-content: left;
    padding-left: 100px;
    @media ${devices.retina} {
      background-image: url(${cocktailIMGDESCR});
    }
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
  @media screen and (min-width: 1440px) {
    width: 100vh;
  }
`;
export const SummaryWrapper = styled.div`
  width: 335px;
  height: 248px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 470px;
    height: 248px;
    padding: 0;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media screen and (min-width: 1440px) {
    width: 488px;
    height: 248px;
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
  border: 1px solid rgba(243, 243, 243, 0.2);
  /* background: var(--main-text-color); */
  color: ${props => props.theme.textColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.13;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.textColor};
    color: ${props => props.theme.bgrColor};
    /* box-shadow: 1px 0px 3px 4px rgba(35, 93, 171, 0.4) inset; */
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
  color: ${props => props.theme.textColor};
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.textColor};
    color: ${props => props.theme.bgrColor};
    /* text-decoration: underline;
    box-shadow: 1px 0px 3px 4px rgba(35, 93, 171, 0.4) inset; */
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.28;
    padding: 18px 44px;
  }
`;
