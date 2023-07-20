import { devices } from 'constants/breakpoints';
import styled from 'styled-components';

export const StyledGlassServi = styled.p`
  font-size: 12px;
  line-height: calc(14 / 12);
  font-style: normal;
  font-weight: 400;

  color: ${props => props.theme.sectionTagTitle};

  margin-bottom: 8px;

  @media ${devices.tablet} {
    font-size: 16px;
    line-height: calc(20 / 16);
  }

  @media ${devices.desktop} {
  }
`;

export const StyledAboutContent = styled.p`
  color: ${props => props.theme.textColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 14);

  margin-bottom: 40px;

  @media ${devices.tablet} {
    font-size: 16px;
    line-height: calc(22 / 16);
  }

  @media ${devices.desktop} {
  }
`;

export const StyledButton = styled.button`
  display: inline-flex;
  padding: 14px 40px;
  align-items: flex-start;
  gap: 10px;

  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(18 / 14);
  color: ${props => props.theme.btnHoverColor};
  font-family: inherit;

  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: transparent;
  color: ${props => props.theme.textColor};
  transition: background-color 0.5s ease;

  margin-bottom: 80px;

  &:hover {
    background-color: ${props => props.theme.trueWhite};
    color: ${props => props.theme.trueBlack};
  }

  @media ${devices.tablet} {
    padding: 18px 44px;

    font-size: 16px;
    line-height: calc(18 / 16);
  }

  @media ${devices.desktop} {
  }
`;

export const StyledImage = styled.img`
  border-radius: 8px;
  margin: 0 auto;

  width: 335px;
  height: 400px;

  @media ${devices.tablet} {
    width: 704px;
    height: auto;
  }

  @media ${devices.desktop} {
    width: 400px;
    height: auto;
  }
`;
