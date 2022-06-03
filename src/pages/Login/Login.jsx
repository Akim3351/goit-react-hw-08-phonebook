import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const onFormChange = event => {
    const { name, value } = event.currentTarget;
    setFormValue({ ...formValue, [name]: value });
  };

  const onFormSubmit = event => {
    event.preventDefault();
    dispatch(logIn(formValue));

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
          Email
          <input
            type="text"
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
        <button type="submit">SIGN IN!</button>
      </form>
    </div>
  );
};

export default Login;
