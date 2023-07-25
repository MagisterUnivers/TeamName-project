import { devices } from 'constants';
import styled from 'styled-components';

export const StyledTitle = styled.h2`
  color: ${props => props.theme.textColor};
  font-size: 28px;
  font-weight: 600;
  line-height: calc(32 / 28);

  margin-bottom: 40px;

  @media ${devices.tablet} {
    font-size: 40px;
    line-height: calc(44 / 40);
  }

  @media ${devices.desktop} {
    margin-bottom: 60px;
  }
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column-reverse;

  @media ${devices.desktop} {
    flex-direction: row;
    gap: 60px;
  }
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const StyledAboutSubtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: calc(18 / 14);

  @media ${devices.tablet} {
    font-size: 16px;
    line-height: calc(22 / 16);
  }
`;

export const StyledImage = styled.img`
  width: 335px;
  height: 430px;

  @media ${devices.tablet} {
    width: 704px;
    height: auto;
  }

  @media ${devices.desktop} {
    width: 631px;
    height: 430px;
  }
`;

export const StyledContentHolder = styled.div`
  @media ${devices.desktop} {
    display: flex;
    justify-content: space-between;
  }
`;
