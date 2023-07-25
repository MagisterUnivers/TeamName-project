import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/selectors';
import { updateThemeThunk } from 'redux/UserInfo/userOperations';
import {
  StyledButton,
  StyledMoonIcon,
  StyledSunIcon,
} from './ThemeButton.styled';

export const ThemeButton = ({ isDarkTheme, setIsDarkTheme, externalFn }) => {
  const dispatch = useDispatch();
  const themeSelector = useSelector(selectTheme);

  const toggleTheme = () => {
    const newTheme = themeSelector === 'dark' ? 'light' : 'dark';
    const payload = JSON.stringify({ theme: newTheme });
    dispatch(updateThemeThunk(payload));

    if (typeof externalFn === 'function') {
      externalFn();
    }
  };

  return (
    <StyledButton
      title={isDarkTheme ? 'switch to light theme' : 'switch to dark theme'}
      onClick={toggleTheme}
    >
      {themeSelector === 'dark' ? (
        <StyledSunIcon title="switch to light theme" />
      ) : (
        <StyledMoonIcon title="switch to dark theme" />
      )}
    </StyledButton>
  );
};
