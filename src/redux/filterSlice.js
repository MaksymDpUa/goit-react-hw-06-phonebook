const filterInitialState = {
  filterValue: '',
};

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/changeFilter':
      return {
        ...state,
        filterValue: action.payload,
      };
    default:
      return state;
  }
};

export const getFilter = state => state.filter;
