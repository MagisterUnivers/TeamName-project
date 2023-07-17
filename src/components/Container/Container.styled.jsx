import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 152px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-top: 224px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
    padding-top: 244px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
