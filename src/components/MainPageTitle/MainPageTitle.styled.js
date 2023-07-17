import { devices } from 'constants/breakpoints';
import { styled } from 'styled-components';

export const StyledMainPageTitle = styled.h1`
  color: #f3f3f3;
  /* color: ${props => props.theme.bgrColor}; */
  font-size: 32px;
  font-weight: 600;
  line-height: calc (38 / 32);
  margin-top: 80px;
  margin-bottom: 40px;
  /* margin-left: 20px; */
  @media ${devices.tablet} {
    font-size: 56px;
    font-weight: 600;
    line-height: calc (60 / 56);
    margin-top: 140px;
    margin-bottom: 60px;
    /* margin-left: 32px; */
  }
  @media ${devices.desktop} {
    font-size: 64px;
    font-weight: 600;
    line-height: calc (68 / 64);
    margin-top: 158px;
    margin-bottom: 62px;
    /* margin-left: 100px; */
  }
`;
