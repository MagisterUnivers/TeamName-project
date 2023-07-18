import { devices } from 'constants/breakpoints';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  gap: 28px;
  flex-direction: column;

  @media ${devices.tablet} {
  }

  @media ${devices.desktop} {
    width: 313px;
  }
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;

  @media ${devices.tablet} {
  }

  @media ${devices.desktop} {
  }
`;

export const StyledTitle = styled.h2`
  color: #f3f3f3;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(24 / 18);

  @media ${devices.tablet} {
    font-size: 24px;
    line-height: calc(32 / 24);
  }

  @media ${devices.desktop} {
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
  }

  @media ${devices.desktop} {
    justify-content: center;
    flex-direction: column;
  }
`;

export const StyledListElement = styled.li`
  display: flex;
  gap: 14px;
  align-items: center;

  @media ${devices.tablet} {
    width: calc((100% - 28px) / 2);
  }

  @media ${devices.desktop} {
    width: auto;
  }
`;

export const StyledImage = styled.img`
  width: 90px;
  height: 90px;
`;

export const StyledSubtitle = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${props => (props.text ? 'rgba(243, 243, 243, 0.50)' : '#f3f3f3')};
  font-size: ${props => (props.text ? '14px' : '16px')};
  font-style: normal;
  font-weight: ${props => (props.text ? '400' : '500')};
  line-height: ${props => (props.text ? 'calc(18/14)' : 'calc(22 / 16)')};

  @media ${devices.tablet} {
    line-height: ${props => (props.text ? 'calc(20/14)' : 'calc(22 / 16)')};
  }

  @media ${devices.desktop} {
  }
`;
