import { devices } from 'constants/breakpoints';
import styled from 'styled-components';

export const StyledCardWrapper = styled.li`
  display: flex;
  width: calc((100% - 42px) / 2);
  flex-direction: column;
  gap: 8px;

  @media ${devices.tablet} {
    width: 220px;
    gap: 14px;
  }

  @media ${devices.desktop} {
  }
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledListWrapper = styled.ul`
  display: flex;
  gap: 35px;
  flex-wrap: wrap;

  @media ${devices.tablet} {
    gap: 22px;
  }

  @media ${devices.desktop} {
  }
`;

export const StyledImage = styled.img`
  /* min-width: 157px;
  height: 157px; */
`;

export const StyledGlassServi = styled.p`
  color: ${props => props.theme.sectionTagTitle};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(20 / 16);

  margin-bottom: 20px;

  @media ${devices.tablet} {
    margin-bottom: 24px;
  }

  @media ${devices.desktop} {
  }
`;

export const StyledIngredientSubtitle = styled.p`
  color: ${props =>
    props.text === 'true' ? '#f3f3f3' : 'rgba(243, 243, 243, 0.50)'};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(18 / 14);

  @media ${devices.tablet} {
    font-size: 18px;
    line-height: calc(24 / 18);
  }

  @media ${devices.desktop} {
  }
`;
