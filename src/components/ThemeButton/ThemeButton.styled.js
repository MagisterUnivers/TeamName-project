import { ReactComponent as SunIcon } from '../../assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg';
import { devices } from 'constants';
import { styled } from 'styled-components';

export const StyledSunIcon = styled(SunIcon)`
  width: 24px;
  height: 24px;

  fill: ${props => props.theme.textColor};

  @media ${devices.tablet} {
    width: 32px;
    height: 32px;
  }
`;

export const StyledMoonIcon = styled(MoonIcon)`
  width: 24px;
  height: 24px;

  fill: ${props => props.theme.textColor};

  @media ${devices.tablet} {
    width: 32px;
    height: 32px;
  }
`;

export const StyledButton = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  &:hover ${StyledSunIcon} {
    animation: rotate 3s ease-in-out 1;

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }

  &:hover ${StyledMoonIcon} {
    animation: rotate 3s ease-in-out 1;

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(40deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }

  @media ${devices.tablet} {
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;
