import { Logo, SubscribeForm, FollowUs, Container, Nav } from 'components';
import { useMediaRules } from 'hooks';
import {
  StyledBottomWrapper,
  StyledContainer,
  StyledFlexWrapper,
  StyledFooter,
  StyledWrapper,
} from './Footer.styled';

export const Footer = () => {
  const { isMobile, isTablet, isDesktop } = useMediaRules();
  return (
    <StyledFooter>
      <Container>
        {isMobile && (
          <>
            <StyledWrapper>
              <StyledContainer>
                <Logo />
                <FollowUs />
              </StyledContainer>
              <Nav />
            </StyledWrapper>

            <SubscribeForm />
            <StyledBottomWrapper>
              <p>&#169;2023 Drink Master. All rights reserved.</p>
              <StyledFlexWrapper>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </StyledFlexWrapper>
            </StyledBottomWrapper>
          </>
        )}

        {isTablet && (
          <>
            <StyledWrapper>
              <StyledContainer>
                <Logo />
                <FollowUs />
                <Nav />
              </StyledContainer>
              <SubscribeForm />
            </StyledWrapper>
            <StyledBottomWrapper>
              <p>&#169;2023 Drink Master. All rights reserved.</p>
              <StyledFlexWrapper>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </StyledFlexWrapper>
            </StyledBottomWrapper>
          </>
        )}

        {isDesktop && (
          <>
            <StyledWrapper>
              <StyledContainer>
                <Logo />
                <FollowUs />
              </StyledContainer>
              <Nav />
              <SubscribeForm />
            </StyledWrapper>
            <StyledBottomWrapper>
              <p>&#169;2023 Drink Master. All rights reserved.</p>
              <StyledFlexWrapper>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </StyledFlexWrapper>
            </StyledBottomWrapper>
          </>
        )}
      </Container>
    </StyledFooter>
  );
};
