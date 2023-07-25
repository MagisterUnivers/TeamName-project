import { devices } from 'constants/breakpoints';
import styled from 'styled-components';

export const StyledTitle = styled.h3`
  margin-bottom: 20px;

  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);

  @media ${devices.tablet} {
    margin-bottom: 24px;

    font-size: 24px;
    line-height: calc(32 / 24);
  }
`;

export const StyledList = styled.ul`
  width: fit-content;

  display: flex;
  gap: 14px;

  list-style: none;

  @media ${devices.tablet} {
    gap: 16px;
  }
`;

export const StyledLink = styled.a`
  width: 38px;
  height: 38px;
  padding: 7px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: 1px solid ${props => props.theme.borderColor};

  transition: border-color 400ms ease, transform 400ms ease;

  &:hover,
  &:focus {
    transform: translateY(-3px);
    ${props => props.theme.hoverBorderColor}
  }
  @media ${devices.tablet} {
    width: 44px;
    height: 44px;
  }
`;

export const getStyledIcon = component => styled(component)`
  width: 22px;
  height: 22px;
  fill: ${props => props.theme.textColor};
  @media ${devices.tablet} {
    width: 28px;
    height: 28px;
  }
`;
