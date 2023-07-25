import { devices } from 'constants';
import { styled } from 'styled-components';

export const StyledMainPageTitle = styled.h1`
  color: #f3f3f3;
  color: ${props => props.theme.textColor};
  font-size: 32px;
  font-weight: 600;
  line-height: calc(38 / 32);
  margin-bottom: 40px;

  @media ${devices.tablet} {
    font-size: 56px;
    font-weight: 600;
    line-height: calc(60 / 56);
    margin-bottom: 60px;
  }

  @media ${devices.desktop} {
    font-size: 64px;
    font-weight: 600;
    line-height: calc(68 / 64);
    margin-bottom: 62px;
  }
`;
