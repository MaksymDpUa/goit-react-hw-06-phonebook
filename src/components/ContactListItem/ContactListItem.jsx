import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';

export const ContactListItem = ({ name, number, contactId}) => {
  const dispatch = useDispatch();
  return (
    <li>
      <p className={css.contactInfo}>
        <span className={css.contactName}>{name}</span>: {number}
      </p>
      <button
        type="button"
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContact(contactId))}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  deleteHandle: PropTypes.func,
  number: PropTypes.number,
  name: PropTypes.string,
  contactId: PropTypes.string,
};
