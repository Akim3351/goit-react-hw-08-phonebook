import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={css.header__wrapper}>
      <h1 className={css.header__title}>Phonebook</h1>
      <div className="">{isLoggedIn ? <UserMenu /> : <AuthMenu />}</div>
    </header>
  );
};
export default AppBar;
