import { devices } from 'constants';
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
`;

export const StyledImage = styled.img``;

export const StyledGlassServi = styled.p`
  color: ${props => props.theme.sectionTagTitle};
  font-size: 16px;
  font-weight: 500;
  line-height: calc(20 / 16);

  margin-bottom: 20px;

  @media ${devices.tablet} {
    margin-bottom: 24px;
  }
`;

export const StyledIngredientSubtitle = styled.p`
  color: ${props =>
    props.text === 'true'
      ? props.theme.textColor
      : props.theme.secondaryTextColor};
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);

  @media ${devices.tablet} {
    font-size: 18px;
    line-height: calc(24 / 18);
  }
`;
