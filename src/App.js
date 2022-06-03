import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Contacts from './pages/Contacts/Contacts';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Layout from './components/Layout/Layout';
import { ToastContainer } from 'react-toastify';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            element={
              <PublicRoute navigateTo="/contacts" restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute navigateTo="/contacts" restricted>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute navigateTo="/contacts" restricted>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute navigateTo="/login">
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
