import { Navigate, useLocation } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const location = useLocation();
  const isOnline = 2;
  const fromPage = location.state?.from.pathname || '/cocktails';
  if (isOnline) {
    return <Navigate to={fromPage} />;
  }
  return children;
};
