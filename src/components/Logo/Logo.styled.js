import { devices } from 'constants';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SiteLogo } from '../../assets/icons/logo.svg';
import { styled } from 'styled-components';

export const StyledLogoLink = styled(NavLink)`
  padding-top: 9px;
  padding-bottom: 9px;

  display: flex;
  align-items: center;
  gap: 8px;

  @media ${devices.tablet} {
    padding-top: 6px;
    padding-bottom: 6px;

    gap: 14px;
  }
`;

export const StyledTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: calc(18 / 16);
  @media ${devices.tablet} {
    font-size: 18px;
    line-height: calc(22 / 18);
  }
`;

export const StyledLogo = styled(SiteLogo)`
  width: 22px;
  height: 22px;

  fill: ${props => props.theme.textColor};

  @media ${devices.tablet} {
    width: 28px;
    height: 28px;
  }
`;
