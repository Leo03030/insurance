import PACKAGES from "../constants/packages";

const initialState = {
  usersData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PACKAGES.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case PACKAGES.LOAD_SUCCESS:
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
