import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/store';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const onSearch = event => {
    const filterValue = event.target.value.toLowerCase();
    dispatch(setFilter(filterValue));
  };

  return (
    <label className={css.search__label}>
      Find contacts by name
      <input onChange={onSearch} type="text" value={filter} />
    </label>
  );
};

export default Filter;
