import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import css from '../ContactsListItem/ContactsListItem.module.css';
import propTypes from 'prop-types';

const ContactsListItem = ({ id, name, phone, onDelete }) => {
  return (
    <li id={id} className={css.contacts__item}>
      <p className={css.contacts__info}>
        {name}: {phone}
      </p>
      <p className={css.contacts__options}>
        <a className={css.contacts__phoneicon} href={`tel:${phone}`}>
          <BsFillTelephoneOutboundFill
            value={{ style: { verticalAlign: 'middle' } }}
          />
        </a>
        <button onClick={() => onDelete(id, name)}>
          <AiFillDelete />
        </button>
      </p>
    </li>
  );
};

ContactsListItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  phone: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};

export default ContactsListItem;
