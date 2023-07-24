import { useEffect } from 'react';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Form } from '../Form/Form';

import css from './App.module.css';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getContacts);
  // const ccc = contacts.contacts;

  // useEffect(
  //   () => localStorage.setItem('contacts', JSON.stringify(contacts)),
  //   [contacts]
  // );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter name="filter" />
      <ContactList />
    </div>
  );
};
