import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

export default function PublicRoute({
  children,
  navigateTo = '/',
  restricted = false,
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldNavigateTo = isLoggedIn && restricted;
  const pass = shouldNavigateTo ? <Navigate to="/" /> : children;
  return isLoggedIn ? <Navigate to={navigateTo} /> : pass;
}
