import { Route, Routes } from 'react-router';
import { MainLayout } from './MainLayout/MainLayout';
import { PrivateRoute } from '../routes/PrivateRoute';
import { PublicRoute } from '../routes/PublicRoute';
import { Suspense, lazy } from 'react';
import Spinner from './Spinner/Spinner';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));

export const App = () => {
  return (
    <>
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
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route path="/main" element={<MainLayout />}>
            <Route
              path="cocktails"
              element={<PrivateRoute>{/* cocktailsPage */}</PrivateRoute>}
            />

            <Route
              path="drinks"
              element={<PrivateRoute>{/* drinksPage */}</PrivateRoute>}
            ></Route>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
