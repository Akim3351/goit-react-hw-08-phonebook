import React from 'react';
import Header from './Header/Header.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactsHeader from './ContactsHeader/ContactsHeader.jsx';
import Filter from './Filter/Filter.jsx';
import ContactsList from './ContactsList/ContactsList.jsx';

function App() {
  return (
    <div className="App">
      <Header title="Phonebook" />
      <ContactForm />

      <ContactsHeader title="Contacts" />
      <Filter />
      <ContactsList />
    </div>
  );
}

export default App;
