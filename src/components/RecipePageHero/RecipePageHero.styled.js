import styled from 'styled-components';

export const StyledGlassServi = styled.p`
  font-size: 12px;
  line-height: calc(14 / 12);
  font-style: normal;
  font-weight: 400;

  color: ${props => props.theme.sectionTagTitle};

  margin-bottom: 8px;
`;

export const StyledTitle = styled.h2`
  color: ${props => props.theme.textColor};
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(38 / 32);

  margin-bottom: 20px;
`;

export const StyledAboutContent = styled.p`
  color: ${props => props.theme.textColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 14);

  margin-bottom: 40px;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  padding: 14px 40px;
  align-items: flex-start;
  gap: 10px;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(18 / 14);
  color: ${props => props.theme.btnHoverColor};
  font-family: inherit;

  border-radius: 42px;
  background-color: ${props => props.theme.textColor};

  margin-bottom: 80px;
`;

export const StyledImage = styled.img`
  border-radius: 8px;
  margin: 0 auto;

  width: 335px;
  height: 400px;
`;
