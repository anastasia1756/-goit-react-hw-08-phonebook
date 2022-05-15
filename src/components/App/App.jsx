import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { useLazyLoader } from 'hooks';
import { PrivateRoute } from 'components/PrivateRoute';
import { ProtectedRoute } from 'components/ProtectedRoute';
import { getisRefreshingUser } from 'redux/auth/authSlice';

export const App = () => {
  const HomePage = useLazyLoader('HomePage');
  const RegisterPage = useLazyLoader('RegisterPage');
  const LoginPage = useLazyLoader('LoginPage');
  const ContactsPage = useLazyLoader('ContactsPage');

  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(getisRefreshingUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingUser && (
      <div>
        <AppBar />
        <Suspense fallback={<p>Loading</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="register"
              element={
                <ProtectedRoute redirectPath="/login">
                  <RegisterPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="login"
              element={
                <ProtectedRoute redirectPath="/contacts">
                  <LoginPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    )
  );
};
