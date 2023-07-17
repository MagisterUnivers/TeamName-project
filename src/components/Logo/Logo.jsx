import { StyledLogo, StyledLogoLink, StyledTitle } from './Logo.styled';

export const Logo = () => {
  return (
    <StyledLogoLink to="/main/home">
      <StyledLogo />
      <StyledTitle>DrinkMaster</StyledTitle>
    </StyledLogoLink>
  );
};
