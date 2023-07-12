import SigninForm from 'components/Forms/SigninForm/SigninForm';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { BaseDiv, PicturedWrapper } from '../WelcomePage/WelcomPage.styled';
import { SummaryWrapper } from './LoginPage.styled';

const LoginPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439.98px)',
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
        <SigninForm />
      </SummaryWrapper>
    </BaseDiv>
  );
};

export default LoginPage;
