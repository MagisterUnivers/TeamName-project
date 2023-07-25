import { NavLink } from 'react-router-dom';
import { devices } from 'constants';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  gap: 28px;
  flex-direction: column;

  @media ${devices.desktop} {
    width: 313px;
  }
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
`;

export const StyledTitle = styled.h2`
  color: ${props => props.theme.textColor};
  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);

  @media ${devices.tablet} {
    font-size: 24px;
    line-height: calc(32 / 24);
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${devices.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 32px;
  }

  @media ${devices.desktop} {
    justify-content: center;
    flex-direction: column;
  }
`;

export const StyledListElement = styled.li`
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media ${devices.tablet} {
    width: 335px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    box-shadow: ${props =>
      props.theme === 'dark'
        ? '0 4px 10px rgba(0, 0, 0, 0.2)'
        : '0 4px 10px rgba(128, 128, 128, 0.2)'};
  }
`;

export const StyledImage = styled.img`
  width: 90px;
  height: 90px;
`;

export const StyledSubtitle = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: ${props => (props.text === 'false' ? 1 : 3)};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${props =>
    props.text === 'true'
      ? props.theme.secondaryTextColor
      : props.theme.textColor};
  font-size: ${props => (props.text === 'true' ? '14px' : '16px')};
  font-weight: ${props => (props.text === 'true' ? '400' : '500')};
  line-height: ${props =>
    props.text === 'true' ? 'calc(18/14)' : 'calc(22 / 16)'};

  @media ${devices.tablet} {
    line-height: ${props =>
      props.text === 'true' ? 'calc(20/14)' : 'calc(22 / 16)'};
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  gap: 14px;

  @media ${devices.desktop} {
    width: auto;
  }
`;
