import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Manrope', sans-serif;
  }

  *,
*::before,
*::after {
  /* box-sizing: border-box; */
  margin: 0;
  padding: 0;
}

img {
  display: block;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol {
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}

li {
  list-style: none;
}

a {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

p {
  padding: 0;
  margin: 0;
}
`;

export default GlobalStyles;
