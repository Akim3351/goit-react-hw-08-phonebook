import React from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import AppBar from 'components/AppBar/AppBar';

export default function Layout() {
  return (
    <div className={css.layout}>
      <AppBar />
      <Outlet />
    </div>
  );
}
