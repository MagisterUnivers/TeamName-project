import styled from 'styled-components';
import { devices } from 'constants/breakpoints';

export const StyledSection = styled.section`
  padding-top: 152px;
  padding-bottom: 80px;
  @media ${devices.tablet} {
    padding-top: 224px;
    padding-bottom: 136px;
  }
  @media ${devices.desktop} {
    flex-direction: row;
    gap: 94px;
    padding-top: 244px;
    padding-bottom: 140px;
  }
`;

export const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.desktop} {
    flex-direction: row;
    gap: 94px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-top: 80px;
  @media ${devices.desktop} {
    margin-top: 0;
  }
`;
