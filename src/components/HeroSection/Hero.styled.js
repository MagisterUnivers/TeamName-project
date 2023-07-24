import styled from 'styled-components';
import heroimg from './heroimg.jpg';
import { devices } from 'constants/breakpoints';

export const Hero = styled.section`
  position: relative;
  background-image: url(${heroimg});

  background-position: top 0px right -320px;

  background-repeat: no-repeat;
  background-size: auto;
  margin-bottom: 100px;

  @media ${devices.tablet} {
    background-position: top 0px right -350px;
    background-size: contain;
  }

  @media ${devices.desktop} {
    background-position: top 0px right 0px;
    background-size: contain;
  }
`;

export const Herowrapper = styled.div`
  padding: 244px 0px 200px 20px;

  width: 68%;

  @media ${devices.tablet} {
    padding: 268px 0px 200px 30px;
  }

  @media ${devices.desktop} {
    padding: 244px 350px 300px 330px;
  }
`;

export const Herodescription = styled.div`
  color: #f3f3f3;
  font-family: Manrope, sans-serif;
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
