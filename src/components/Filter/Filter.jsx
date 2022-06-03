import React from 'react';
import css from './Filter.module.css';

const Filter = ({ onFilter, filterValue }) => {
  return (
    <label className={css.search__label}>
      Find contacts by name
      <input onChange={onFilter} type="text" value={filterValue} />
    </label>
  );
};

export default Filter;
