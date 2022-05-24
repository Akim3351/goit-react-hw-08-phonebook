import React from 'react';
import { IoMdContacts } from 'react-icons/io';
import propTypes from 'prop-types';
import css from './ContactsHeader.module.css';

const ContactsHeader = ({ title }) => {
  return (
    <div className={css.contacts__header}>
      <h2 className={css.contacts__title}>
        <IoMdContacts value={{ style: { verticalAlign: 'middle' } }} />
        {title}
      </h2>
    </div>
  );
};

ContactsHeader.propTypes = {
  title: propTypes.string.isRequired,
};

export default ContactsHeader;
