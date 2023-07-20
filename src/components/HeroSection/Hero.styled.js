import styled from 'styled-components';
import heroimg from './heroimg.jpg';

export const Hero = styled.div`
  padding-top: 244px;
  padding-bottom: 300px;
  /* background-image: linear-gradient(to top, transparent, black), url(${heroimg}); */
  background-image: url(${heroimg});
  background-repeat: no-repeat;
  background-position: top 0px right -200px;
`;

export const Herowrapper = styled.div`
  width: 68%;
`;

export const Herodescription = styled.div`
  color: #f3f3f3;
  font-family: Manrope, sans-serif;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 40px;
`;

export const Herobackground = styled.div`
  /* background-image: linear-gradient(to top, transparent, black), url(${heroimg}); */
  /* display: block;
  width: 10px;
  height: 100px;
  background-image: url(${heroimg});
  background-repeat: no-repeat;
  background-position: top 0px right -200px;
  opacity: 0.9; */
`;
