import { Route, Routes } from 'react-router';
import { PrivateRoute } from '../routes/PrivateRoute';
import { PublicRoute } from '../routes/PublicRoute';
import { Suspense, lazy, useState } from 'react';
import Spinner from './Spinner/Spinner';
import GlobalStyles from './GlobalStyles';
import { useEffect } from 'react';
import TestPage from 'pages/TestPage/TestPage';
// import PreviewDrinks from './PreviewDrinks/PreviewDrinks';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from 'theme/dark';
import { lightTheme } from 'theme/light';
import { SharedLayout } from 'components';
import DrinksPage from 'pages/DrinksPage/DrinksPage';
import MyRecipesPage from 'pages/MyRecipesPage/MyRecipesPage';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const AddRecipePage = lazy(() => import('pages/AddRecipePage/AddRecipePage'));

export const App = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        {' '}
        <GlobalStyles />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/test"
              element={
                <TestPage
                  isDarkTheme={isDarkTheme}
                  setIsDarkTheme={setIsDarkTheme}
                />
              }
            />
            {/* <Route path="/main" element={<MainLayout />}> */}
            <Route path="/main" element={<SharedLayout />}>
              <Route
                path="cocktails"
                element={<PrivateRoute>{/* cocktailsPage */}</PrivateRoute>}
              />
              <Route
                path="drinks"
                element={<PrivateRoute>{<DrinksPage />}</PrivateRoute>}
              />
              <Route
                path="my"
                element={<PrivateRoute>{<MyRecipesPage />}</PrivateRoute>}
              />
            </Route>
            <Route
              path="add"
              element={<PrivateRoute>{<AddRecipePage />}</PrivateRoute>}
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          {/* <PreviewDrinks /> */}
        </Suspense>
      </ThemeProvider>
    </>
  );
};
