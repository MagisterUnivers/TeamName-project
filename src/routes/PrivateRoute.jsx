import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { selectIsOnline } from 'redux/selectors';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isOnline = useSelector(selectIsOnline);

  if (!isOnline) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
};
