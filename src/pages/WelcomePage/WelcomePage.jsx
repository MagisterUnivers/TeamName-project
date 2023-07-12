import React from 'react';
import { styled } from 'styled-components';

const StyledH1 = styled.h1`
  color: ${props => props.theme.textColor};
`;

const WelcomePage = ({ theme, setTheme }) => {
  return (
    <div>
      <StyledH1>Welcome Page</StyledH1>
      <p>Text test</p>
      <p>Theme:</p>
      <button
        type="button"
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      >
        {theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
      </button>
    </div>
  );
};

export default WelcomePage;
