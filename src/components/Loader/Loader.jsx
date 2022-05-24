import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader__wrapper}>
      <ThreeDots color="black" height={200} width={200} />
    </div>
  );
};

export default Loader;
