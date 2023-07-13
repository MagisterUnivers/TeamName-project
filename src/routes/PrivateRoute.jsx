import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isOnline = 1;

  if (!isOnline) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
