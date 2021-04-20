export const initialState = {
  term: null,
};

const reducer = (state, action) => {
  console.log(action);

  // action -> type, [payload]

  switch (action.type) {
    case "SET_SEARCH_TERM":
      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
};

export default reducer;
