import { Navigate, useLocation } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const location = useLocation();
  const isOnline = false;
  const fromPage = location.state?.from.pathname || '/';
  if (isOnline) {
    return <Navigate to={fromPage} />;
  }
  return children;
};
