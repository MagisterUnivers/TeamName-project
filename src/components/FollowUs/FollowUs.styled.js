import { devices } from 'constants/breakpoints';
import styled from 'styled-components';

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
  border: 1px solid rgba(243, 243, 243, 0.2);

  transition: border-color 400ms ease, transform 400ms ease;

  &:hover,
  &:focus {
    transform: translateY(-3px);
    border-color: var(--main-text-color);
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
