import styled from 'styled-components';
import { devices } from 'constants/breakpoints';

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media ${devices.tablet} {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${devices.desktop} {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
