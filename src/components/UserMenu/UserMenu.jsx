import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <div>
      <h2>User: {name}</h2>
      <p>Email: {email}</p>
      <button className={css.logout__button} onClick={() => dispatch(logOut())}>
        SIGN OUT
      </button>
    </div>
  );
};

export default UserMenu;
