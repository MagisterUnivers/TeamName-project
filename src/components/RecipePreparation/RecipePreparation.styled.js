import styled from 'styled-components';

export const StyledTitle = styled.h2`
  /* margin-bottom: 60px; */

  color: ${props => props.theme.textColor};
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(32 / 28);

  margin-bottom: 40px;
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column-reverse;
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const StyledAboutSubtitle = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 14);
`;

export const StyledImage = styled.img`
  width: 335px;
  height: 430px;
`;
