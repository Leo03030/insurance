import USER from "./constatns";

const initialState = {
  usersData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case USER.LOAD_SUCCESS:
      return {
        ...state,
        usersData: action.usersData,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
