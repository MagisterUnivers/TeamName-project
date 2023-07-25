import {
  BaseDiv,
  SummaryWrapper,
  WelcomeTitle,
  WelcomeText,
  ButtonsBlock,
  RegistrationNavLink,
  SignInNavLink,
} from './WelcomPage.styled';

const WelcomePage = () => {
  return (
    <BaseDiv>
      <SummaryWrapper>
        <WelcomeTitle>Welcome to the app!</WelcomeTitle>
        <WelcomeText>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </WelcomeText>
        <ButtonsBlock>
          <RegistrationNavLink to="/register">Registration</RegistrationNavLink>
          <SignInNavLink to="/signin">Sign In</SignInNavLink>
        </ButtonsBlock>
      </SummaryWrapper>
    </BaseDiv>
  );
};

export default WelcomePage;
