import { useMediaQuery } from 'react-responsive';
import {
  BaseDiv,
  SummaryWrapper,
  WelcomeTitle,
  WelcomeText,
  ButtonsBlock,
  RegistrationNavLink,
  SignInNavLink,
} from './WelcomPage.styled';
import { Container } from 'components';

const WelcomePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    <BaseDiv>
      <Container>
        <SummaryWrapper>
          <WelcomeTitle>Welcome to the app!</WelcomeTitle>
          <WelcomeText>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </WelcomeText>
          <ButtonsBlock>
            <RegistrationNavLink to="/register">
              Registration
            </RegistrationNavLink>
            <SignInNavLink to="/signin">Sign In</SignInNavLink>
          </ButtonsBlock>
        </SummaryWrapper>
      </Container>
    </BaseDiv>
  );
};

export default WelcomePage;
