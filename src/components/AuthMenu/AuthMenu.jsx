import { NavLink } from 'react-router-dom';
import css from './AuthMenu.module.css';

const AuthMenu = () => {
  return (
    <nav className={css.navigation}>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? `${css.activeLink}` : `${css.link}`
        }
      >
        SIGN UP
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${css.activeLink}` : `${css.link}`
        }
      >
        SIGN IN
      </NavLink>
    </nav>
  );
};

export default AuthMenu;
