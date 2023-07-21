import { devices } from 'constants/breakpoints';
import { styled } from 'styled-components';

export const WrapDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const P404 = styled.p`
  color: rgba(243, 243, 243, 0.1);
  font-family: Manrope;
  font-size: 120px;
  font-style: normal;
  font-weight: 600;
  line-height: 123px;
  position: absolute;
  z-index: 15;
  top: 152px;
  word-spacing: 80px;

  @media ${devices.tablet} {
    top: 161px;
    font-size: 150px;
    word-spacing: 100px;
  }
`;

export const ImgNotFound = styled.img`
  width: 375px;
  height: 517px;

  @media ${devices.tablet} {
    width: 465px;
  }
`;

export const PageWrap = styled.div`
  width: 100%;
  heght: 100%;
  display: flex;
  justify-content: center;
  alighn-items: center;
`;
