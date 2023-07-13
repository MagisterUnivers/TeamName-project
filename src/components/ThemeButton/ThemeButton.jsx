import { StyledButton, StyledMoonIcon, StyledSunIcon } from "./ThemeButton.styled"

export const ThemeButton = ({ isDarkTheme, setIsDarkTheme }) => {
    console.log(isDarkTheme);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }
  return (
      <StyledButton onClick={toggleTheme}>
          {isDarkTheme? <StyledSunIcon/>: <StyledMoonIcon/>}

      </StyledButton>
  )
}
