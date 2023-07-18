import styled from 'styled-components';

export const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 94px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-top: 80px;
  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;
