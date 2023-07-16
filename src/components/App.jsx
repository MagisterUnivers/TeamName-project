import { Route, Routes } from 'react-router';
import { PrivateRoute } from '../routes/PrivateRoute';
import { PublicRoute } from '../routes/PublicRoute';
import { Suspense, lazy } from 'react';
import Spinner from './Spinner/Spinner';
import GlobalStyles from './GlobalStyles';
import { useEffect } from 'react';
import TestPage from 'pages/TestPage/TestPage';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from 'theme/dark';
import { lightTheme } from 'theme/light';
import { SharedLayout } from 'components';
import DrinksPage from 'pages/DrinksPage/DrinksPage';
import MyRecipesPage from 'pages/MyRecipesPage/MyRecipesPage';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/selectors';

// import PreviewDrinks from './PreviewDrinks/PreviewDrinks'; // by Igor
// import { mockData } from '../assets/mockData/mockDataCocktails'; // by Igor - delete after add backend

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

  const theme = useSelector(selectTheme);
  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
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
            <Route path="/test" element={<TestPage />} />
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
              <Route
                path="add"
                element={<PrivateRoute>{<AddRecipePage/>}</PrivateRoute>}
              />
            </Route>
            

            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          {/* <PreviewDrinks title="Ordinary Drink" mockData={mockData} />
          <PreviewDrinks title="Cocktail" mockData={mockData} />
          <PreviewDrinks title="Shake" mockData={mockData} />
          <PreviewDrinks title="Other/Unknow" mockData={mockData} /> */}
        </Suspense>
      </ThemeProvider>
    </>
  );
};
