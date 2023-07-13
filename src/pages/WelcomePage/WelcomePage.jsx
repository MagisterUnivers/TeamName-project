import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  BaseDiv,
  PicturedWrapper,
  SummaryWrapper,
  WelcomeTitle,
  WelcomeText,
  ButtonsBlock,
  RegistrationNavLink,
  SignInNavLink,
} from './WelcomPage.styled';

const WelcomePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    <BaseDiv>
      {isMobile && (
        <PicturedWrapper
          src={
            isRetina
              ? require('../../images/WelcomPage/welcom1mob@2x.png')
              : require('../../images/WelcomPage/welcom1mob.png')
          }
          alt="white cocktail"
          width="295"
          height="812"
        />
      )}
      {isTablet && (
        <PicturedWrapper
          src={
            isRetina
              ? require('../../images/WelcomPage/welcom1tab@2x.png')
              : require('../../images/WelcomPage/welcom1tab.png')
          }
          alt="white cocktail"
          width="466"
          height="1024"
        />
      )}
      {isDesktop && (
        <PicturedWrapper
          src={
            isRetina
              ? require('../../images/WelcomPage/welcom1desk@2x.png')
              : require('../../images/WelcomPage/welcom1desk.png')
          }
          alt="white cocktail"
          width="703"
          height="983"
        />
      )}
      <SummaryWrapper>
        <WelcomeTitle>Welcome to the app!</WelcomeTitle>
        <WelcomeText>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </WelcomeText>
        <ButtonsBlock>
          <RegistrationNavLink to="/register">Registration</RegistrationNavLink>
          <SignInNavLink to="/signin">Sign in</SignInNavLink>
        </ButtonsBlock>
      </SummaryWrapper>
    </BaseDiv>
  );
};

export default WelcomePage;
