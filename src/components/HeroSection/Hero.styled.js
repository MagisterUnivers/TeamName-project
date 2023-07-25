import styled from 'styled-components';
import heroimgDark from '../../assets/img/hero-section/heroimg.jpg';
import heroimgLight from '../../assets/img/hero-section/Mask-group.png';

import { devices } from 'constants/breakpoints';

export const Hero = styled.section`
  position: relative;
  background-image: ${props =>
    props.currenttheme === 'dark'
      ? `url(${heroimgDark})`
      : `url(${heroimgLight})`};

  background-position: top 0px right
    ${props => (props.currenttheme === 'dark' ? '-320px' : '-560px')};

  background-repeat: no-repeat;
  background-size: auto;
  margin-bottom: 100px;

  @media ${devices.tablet} {
    background-position: top 0px right
      ${props => (props.currenttheme === 'dark' ? '-230px' : '-350px')};
    background-size: contain;
  }

  @media ${devices.desktop} {
    background-position: top 0px right
      ${props => (props.currenttheme === 'dark' ? '0px' : '-180px')};
    background-size: contain;
  }
`;

export const Herowrapper = styled.div`
  padding: 164px 0px 200px 0px;
  width: 68%;
  overflow: hidden;

  @media ${devices.tablet} {
    padding: 184px 0px 200px 0px;
  }

  @media ${devices.desktop} {
    padding: 244px 0px 300px 0px;
  }
`;

export const Herodescription = styled.div`
  color: ${props => props.theme.textColor};
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 40px;
`;

export const Herobackground = styled.div`
  position: absolute;
  /* background-color: #fff; */
  width: 45%;
  height: 25%;
  top: 60%;
  left: 85%;

  border-radius: 50%;

  background-image: radial-gradient(
    circle,
    rgba(64, 112, 205, 0.9),
    rgba(64, 112, 205, 0.9)
  );
  filter: blur(80px);
  background-repeat: no-repeat;

  @media ${devices.tablet} {
    width: 45%;
    height: 30%;
    top: 55%;
    left: 90%;
    filter: blur(80px);
  }

  @media ${devices.desktop} {
    width: 25%;
    height: 65%;
    top: 70%;
    left: 90%;
    filter: blur(190px);
  }
`;
