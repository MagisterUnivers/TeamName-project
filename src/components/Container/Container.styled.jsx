import styled from 'styled-components';
import heroimg from './heroimg.jpg';

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 152px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 80px;

  background-image: url(${heroimg});
  background-repeat: no-repeat;
  background-position: top 0px right -200px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-top: 224px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 140px;

    background-position: top 0px right -200px;
  }

  @media screen and (min-width: 1240px) {
    width: 1440px;
    padding-top: 244px;
    padding-left: 100px;
    padding-right: 100px;

    background-position: top 0px left 750px;
  }
`;
