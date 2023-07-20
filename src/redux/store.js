import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.

// const contactsInStorage = JSON.parse(localStorage.getItem('contacts')) ?? [];
// const contactsInitialState = {
//     contacts: contactsInStorage,
//     filter: '',
// };
// console.log(contactsInStorage);
// {name: 'vova', id: 'BXRYHWBYIygnqf3kwHu1D', number: 23423424}
// const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case 'contacts/deleteContact':
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };

// const filterInitialState = '';

// const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case 'filter/changeFilter':
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };

const enhancer = devToolsEnhancer();

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
// // Поки що використовуємо редюсер який
// // тільки повертає отриманий стан
// const rootReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case 'contacts/deleteContact':
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     case 'filter/changeFilter':
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };
export const store = createStore(rootReducer, enhancer);
