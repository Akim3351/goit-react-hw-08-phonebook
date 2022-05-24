import React, { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const { data = [] } = useGetContactsQuery();
  const [formValue, setFormValue] = useState({
    name: '',
    phone: '',
  });
  const [addContact] = useAddContactMutation();

  const contactNamesForCheck = data.map(contact => {
    return contact.name.toLowerCase();
  });

  const onFormChange = event => {
    const { name, value } = event.currentTarget;
    setFormValue({ ...formValue, [name]: value });
  };

  const onFormSubmit = async event => {
    event.preventDefault();
    const newContact = {
      id: shortid.generate(),
      ...formValue,
    };

    const contactAllreadyExists = contactNamesForCheck.find(
      item => item === newContact.name.toLowerCase()
    );

    if (contactAllreadyExists) {
      toast.error(`${newContact.name}'s phone is already in your contacts`);
    } else {
      await addContact(newContact);
      toast.success(`${newContact.name}'s phone added to your contacts`);
      setFormValue({ name: '', phone: '' });
    }
  };

  return (
    <>
      <form className={css.input__form} onSubmit={onFormSubmit}>
        <label className={css.input__label}>
          name
          <input
            type="text"
            name="name"
            value={formValue.name}
            onChange={onFormChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.input__label}>
          number
          <input
            type="tel"
            name="phone"
            value={formValue.phone}
            onChange={onFormChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">add contact</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
