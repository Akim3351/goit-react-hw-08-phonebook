import React, { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contacts/contactsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const { data = [] } = useGetContactsQuery();
  const [formValue, setFormValue] = useState({
    name: '',
    number: '',
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
    const { name, number } = formValue;
    console.log(name, number);
    const contactAllreadyExists = contactNamesForCheck.find(
      item => item === name.toLowerCase()
    );

    if (contactAllreadyExists) {
      toast.error(`${name}'s phone is already in your contacts`);
    } else {
      await addContact({ name, number }).unwrap();
      toast.success(`${name}'s phone added to your contacts`);
      setFormValue({ name: '', number: '' });
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
            name="number"
            value={formValue.number}
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
