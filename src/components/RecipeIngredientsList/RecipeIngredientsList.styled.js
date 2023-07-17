import styled from 'styled-components';

export const StyledCardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  width: 220px;
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledListWrapper = styled.ul`
  display: flex;
  gap: 35px;
  flex-wrap: wrap;
`;

export const StyledImage = styled.img`
  min-width: 157px;
  height: 157px;
`;

export const StyledGlassServi = styled.p`
  color: ${props => props.theme.sectionTagTitle};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(20 / 16);

  margin-bottom: 20px;
`;
