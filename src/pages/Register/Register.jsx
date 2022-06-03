import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onFormChange = event => {
    const { name, value } = event.currentTarget;
    setFormValue({ ...formValue, [name]: value });
  };

  const onFormSubmit = event => {
    event.preventDefault();

    dispatch(register(formValue));

    setFormValue({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} className={css.input__form}>
        <label className={css.input__label}>
          Name
          <input
            type="text"
            name="name"
            value={formValue.name}
            onChange={onFormChange}
          />
        </label>
        <label className={css.input__label}>
          Email
          <input
            type="email"
            name="email"
            value={formValue.email}
            onChange={onFormChange}
          />
        </label>
        <label className={css.input__label}>
          Password
          <input
            type="password"
            name="password"
            value={formValue.password}
            onChange={onFormChange}
          />
        </label>
        <button type="submit">SIGN UP!</button>
      </form>
    </div>
  );
};

export default Register;
