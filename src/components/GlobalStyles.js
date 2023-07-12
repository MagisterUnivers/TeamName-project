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
  box-sizing: border-box;
}

body {
  color: var(--main-text-color);
  font-family: 'Manrope', sans-serif;
  line-height: 1.5;

  background-color: var(--main-bgr-color);
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
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

button {
  cursor: pointer;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

@media screen and (min-width: 768px) {
  .container {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media screen and (min-width: 1440px) {
  .container {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
}
`;

export default GlobalStyles;
