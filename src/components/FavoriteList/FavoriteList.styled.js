import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const FavoriteListStyled = styled.ul`
  display: grid;
  row-gap: 28px;
  grid-template-columns: repeat(1, 1fr);
  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 40px;
  }
  @media ${devices.desktop} {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 80px;
  }
`;

export const NotFavorioteText = styled.p`
  width: 205px;
  color: ${props => props.theme.color};
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  @media ${devices.tablet} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const WrapDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const notFoundImg1x = require('../../assets/img/NotFound1x.jpg');
const notFoundImg2x = require('../../assets/img/NotFound2x.jpg');
const notFoundWhite1x = require('../../assets/img/notFoundWhite1x.png');
const notFoundWhite2x = require('../../assets/img/notFoundWhite2x.png');

export const NotFoundImg = styled.div`
  width: 375px;
  height: 517px;
  background-image: ${props =>
    props.theme === 'dark'
      ? props.ismobile
        ? `url(${notFoundImg2x})`
        : `url(${notFoundImg1x})`
      : props.isMobile
      ? `url(${notFoundWhite2x})`
      : `url(${notFoundWhite1x})`};
  background-repeat: no-repeat;
  background-position: center;
  @media ${devices.tablet} {
    width: 465px;
  }
`;
