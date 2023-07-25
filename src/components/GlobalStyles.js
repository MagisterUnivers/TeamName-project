import { devices } from 'constants';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 @import-normalize; // normalize (border-box)

:root {

  /* Colors */
  --main-bgr-color: #0a0a11;
  --btn-hover-color: #161f37;
  --main-text-color: #f3f3f3;
  --correct-state-color: #3cbc81;
  --error-state-color: #da1414;
  --pagination-accent-color: #4070cd80;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: ${props => props.theme.textColor};
  font-family: 'Manrope', sans-serif;
  line-height: 1.5;
  background-color: ${props => props.theme.bgrColor};
  transition: background-color 1s;  

  /* background-image: radial-gradient(
    circle at center,
    white 0%,
    #BCE6D2 40%
  ),radial-gradient(
    circle at center,
    white 0%,
    #4070CD 40%
  ),radial-gradient(
    circle at center,
    white 0%,
    #BCE6D2 40%
  ),radial-gradient(
    circle at center,
    white 0%,
    #4070CD 40%
  ),radial-gradient(
    circle at center,
    white 0%,
    #4070CD 40%
  ),radial-gradient(
    circle at center,
    white 0%,
    #BCE6D2 100%
  ),radial-gradient(
    circle at center,
    white 0%,
    #4070CD 40%
  );
  background-size: 280px 250px, 
  250px 250px, 
  200px 200px, 
  200px 400px, 
  400px 400px, 
  200px 120px, 
  200px 120px;
  background-repeat: no-repeat;
  
  backdrop-filter: blur(300px);

  background-position: right -200px top 26%,
  right -200px top 20%,
  right -100px top 20%,
  left -40px top 10%,
  left -10% top 5%,
  left -395px  bottom 0%,
  left 70%  bottom -119px;
 
  @media ${devices.tablet} {
 background-position: right -270px top 26%,
 right 70px top 18%,
 left 20% top 10%,
 left -10% top 5%,
 left -80% bottom 1%,
 left 50%  bottom -100px,
 right 10px bottom -100px;
}

  @media ${devices.desktop} {
   background-position: right -270px top 26%,
   right 70px top 18%,
   left 15% top 7%,
   left -11% top 10%,
   left -26% bottom 3%,
   left 50%  bottom -100px,
   right 10px bottom -100px;
  } */
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

button {
  cursor: pointer;
  font-family: inherit;
}

input {
  font-family: inherit;
}

main {
  margin-top: 72px;

  @media ${devices.tablet} {
    margin-top: 84px;
  }
}

.subscribe__validation {

  h5 {
border-bottom: 1px solid ${props => props.theme.textColor} !important;  }

  ul {
    list-style: square;
    font-size: 13px;
    margin-left: 27px;
    color: ${props => props.theme.textColor};
  }
  
  a:hover{
    transform: scale(1.1);
  }
}
`;

export default GlobalStyles;
