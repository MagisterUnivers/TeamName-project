import { useDispatch, useSelector } from "react-redux"
import { StyledButton, StyledMoonIcon, StyledSunIcon } from "./ThemeButton.styled"
import { selectTheme } from "redux/selectors"
import { updateThemeThunk } from "redux/UserInfo/userOperations";

export const ThemeButton = ({ isDarkTheme, setIsDarkTheme }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme)
  console.log(theme);
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    const payload = JSON.stringify({ theme: newTheme });
        dispatch(updateThemeThunk(payload))
    }
  return (
    <StyledButton
      title={isDarkTheme ? 'switch to light theme' : 'switch to dark theme'}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <StyledSunIcon title="switch to light theme" />
      ) : (
        <StyledMoonIcon title="switch to dark theme" />
      )}
    </StyledButton>
  );
}
