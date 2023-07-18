import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 @import-normalize;

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
}
`;

export default GlobalStyles;
