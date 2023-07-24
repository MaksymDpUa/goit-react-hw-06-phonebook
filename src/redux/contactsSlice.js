// const contactsInStorage = JSON.parse(localStorage.getItem('contacts')) ?? [];

// const contactsInitialState = {
//   contactList: contactsInStorage,
// };

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       return {
//         ...state,
//         contactList: [...state.contactList, action.payload],
//       };
//     case 'contacts/deleteContact':
//       return {
//         ...state,
//         contactList: state.contactList.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export const getContacts = state => state.contacts;

import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// const filterInitialState = {
//   filterValue: '',
// };

// const contactsInitialState = {
//   contactList:[]
// };

export const filterSlice = createSlice({
  name: 'contacts',
  initialState: { contactList: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contactList = [...state.contactList, action.payload];
      },

      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.contactList = state.contactList.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = filterSlice.actions;
export const contactsReducer = filterSlice.reducer;
export const getContacts = state => state.contacts;
