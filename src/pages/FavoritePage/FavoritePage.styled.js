import { devices } from 'constants/breakpoints';
import { styled } from 'styled-components';

export const PageWrapFavorite = styled.div`
  padding-top: 80px;
  @media ${devices.tablet} {
    padding-top: 140px;
  }
  @media ${devices.desktop} {
    padding-top: 158px;
  }
`;
