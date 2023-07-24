import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

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
export const getContacts = state => state.contacts.contactList;
