import { StyledLogo, StyledLogoLink, StyledTitle } from './Logo.styled';

export const Logo = () => {
  return (
    <StyledLogoLink to="/main/drinks">
      <StyledLogo />
      <StyledTitle>DrinkMaster</StyledTitle>
    </StyledLogoLink>
  );
};
