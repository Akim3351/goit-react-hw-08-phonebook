import React, { useState } from 'react';
import Header from 'components/Header/Header';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsHeader from 'components/ContactsHeader/ContactsHeader';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

const Contacts = () => {
  const [filter, setFilter] = useState('');
  const onFilter = event => {
    setFilter(event.target.value);
  };

  return (
    <div className="Wrapper">
      <Header title="Phonebook" />
      <ContactForm />

      <ContactsHeader title="Contacts" />
      <Filter onFilter={onFilter} filterValue={filter} />
      <ContactsList filter={filter} />
    </div>
  );
};

export default Contacts;
