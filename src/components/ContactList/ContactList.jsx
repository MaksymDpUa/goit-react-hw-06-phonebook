import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // const clll = contacts.contacts;
  // const fff = filter.filter;
  // console.log(contacts);
  // console.log(filter);
  // console.log(fff);
  const getVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <ContactListItem
            key={contact.name}
            name={contact.name}
            number={contact.number}
            contactId={contact.id}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  deleteHandle: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
};
