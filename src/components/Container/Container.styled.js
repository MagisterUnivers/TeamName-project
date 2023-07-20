import styled from 'styled-components';
import { devices } from 'constants/breakpoints';

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 152px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 80px;

  @media ${devices.tablet} {
    width: 768px;
    padding-top: 224px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 140px;
  }

  @media ${devices.desktop} {
    width: 1440px;
    padding-top: 244px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
