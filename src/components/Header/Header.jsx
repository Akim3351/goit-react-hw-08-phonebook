import React from 'react';
import css from './Header.module.css';
import { RiContactsBookLine } from 'react-icons/ri';
import propTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header className={css.header}>
      <h1 className={css.header__title}>
        <RiContactsBookLine value={{ style: { verticalAlign: 'middle' } }} />
        {title}
      </h1>
    </header>
  );
};

Header.propTypes = {
  title: propTypes.string.isRequired,
};

export default Header;
