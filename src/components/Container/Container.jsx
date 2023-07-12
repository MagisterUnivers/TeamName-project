import { StyledContainer } from './Container.styled';

export const Container = ({ children }) => {
  return <StyledContainer className="container">{children}</StyledContainer>;
};
