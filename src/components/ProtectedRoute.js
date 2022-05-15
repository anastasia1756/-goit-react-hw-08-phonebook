import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSlice';

export const ProtectedRoute = ({ children, redirectPath = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
