import React from 'react';
import propTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ onFilter, filterValue }) => {
  return (
    <label className={css.search__label}>
      Find contacts by name
      <input onChange={onFilter} type="text" value={filterValue} />
    </label>
  );
};

Filter.propTypes = {
  onFilter: propTypes.func.isRequired,
  filterValue: propTypes.string.isRequired,
};

export default Filter;
