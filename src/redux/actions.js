import { nanoid } from 'nanoid';

// export const addStartContacts = (contactsFromStorage) => {
//     return {
//       type: 'contacts/addStartContacts',
//       payload: contactsFromStorage,
//     };
// }
export const changeFilter = (value) => {
    return {
        type: 'filter/changeFilter',
        payload: value
    };
}

export const addContactToRedux = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      name,
      number,
      id: nanoid(),
    },
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};
