import { createSlice } from '@reduxjs/toolkit';

// const filterInitialState = {
//   filterValue: '',
// };

// const initialState = {
//   todos: [],
// };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterValue: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filterValue = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
// export const getAllTodos = state => state.todos;

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case 'filter/changeFilter':
//       return {
//         ...state,
//         filterValue: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export const getFilter = state => state.filter.filterValue;
