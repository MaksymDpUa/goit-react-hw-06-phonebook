import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/actions';
import { getFilter } from 'redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const inputFilterId = nanoid();
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  const change = e => dispatch(changeFilter(e.target.value));

  return (
    <>
      <label htmlFor={inputFilterId} className={css.lableFilter}>
        Find your contact
      </label>
      <input
        className={css.inputFilter}
        name="filter"
        value={filterValue}
        onChange={change}
        id={inputFilterId}
      ></input>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
