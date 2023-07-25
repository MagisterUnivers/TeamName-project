import styled from 'styled-components';
import { devices } from 'constants/breakpoints';

export const StyledSection = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
  @media ${devices.tablet} {
    padding-top: 140px;
    padding-bottom: 136px;
  }
  @media ${devices.desktop} {
    flex-direction: row;
    gap: 94px;
    padding-top: 160px;
    padding-bottom: 140px;
  }
`;

