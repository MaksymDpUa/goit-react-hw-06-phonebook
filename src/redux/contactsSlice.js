const contactsInStorage = JSON.parse(localStorage.getItem('contacts')) ?? [];

const contactsInitialState = {
  contactList: contactsInStorage,
};

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contactList: [...state.contactList, action.payload],
      };
    case 'contacts/deleteContact':
      return {
        ...state,
        contactList: state.contactList.filter(
          contact => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// export const getContacts = state => state.contacts;
