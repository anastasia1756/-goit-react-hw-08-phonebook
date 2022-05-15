import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSlice';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/login" />;
};
