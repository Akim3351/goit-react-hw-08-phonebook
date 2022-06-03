import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import propTypes from 'prop-types';
import authSelectors from 'redux/auth/authSelectors';

export default function PrivateRoute({ children, navigateTo = '/' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={navigateTo} />;
}

PrivateRoute.propTypes = {
  children: propTypes.node.isRequired,
  navigateTo: propTypes.string.isRequired,
};
