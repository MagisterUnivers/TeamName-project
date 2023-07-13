import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  position: absolute;
  top: 240px;
  left: 20px;

  @media screen and (min-width: 768px) {
    top: 331px;
    left: 64px;
  }
  @media screen and (min-width: 1440px) {
    top: 204px;
    left: 100px;
  }
`;
