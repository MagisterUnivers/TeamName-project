import { StyledButton, StyledMoonIcon, StyledSunIcon } from "./ThemeButton.styled"

export const ThemeButton = ({ isDarkTheme, setIsDarkTheme }) => {
    console.log(isDarkTheme);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }
  return (
    <StyledButton
      title={isDarkTheme ? 'switch to light theme' : 'switch to dark theme'}
      onClick={toggleTheme}
    >
      {isDarkTheme ? (
        <StyledSunIcon title="switch to light theme" />
      ) : (
        <StyledMoonIcon title="switch to dark theme" />
      )}
    </StyledButton>
  );
}
