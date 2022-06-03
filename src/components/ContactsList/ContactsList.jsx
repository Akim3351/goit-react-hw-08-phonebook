import React from 'react';
import propTypes from 'prop-types';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactsListItem from '../ContactsListItem/ContactsListItem';
import Loader from 'components/Loader/Loader';
import css from './ContactsList.module.css';

const ContactsList = ({ filter }) => {
  const [removeContact] = useDeleteContactMutation();
  const { data = [], isFetching } = useGetContactsQuery();
  const filteredContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );
  const onDelete = ({ id, name }) => {
    removeContact(id).unwrap();
    toast.info(`${name}'s phone was succesfully deleted`, {
      autoClose: 5000,
    });
  };

  return isFetching ? (
    <Loader />
  ) : (
    <>
      <ul className={css.contacts__list}>
        {filteredContacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <ContactsListItem
              id={id}
              name={name}
              number={number}
              onDelete={onDelete}
              key={id}
            />
          );
        })}
      </ul>
      <ToastContainer />
    </>
  );
};

ContactsList.propTypes = {
  filter: propTypes.string,
};

export default ContactsList;
