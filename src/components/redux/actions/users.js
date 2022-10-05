import USER from "../constants/users";
import users from "../dataSources/users.json";

export const requestUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: USER.LOAD_SUCCESS,
      usersData: users,
      isError: false,
      isLoading: false,
    });
  } catch (e) {
    dispatch({
      type: USER.LOAD_SUCCESS,
      usersData: [],
      isError: true,
      isLoading: false,
    });
  }
};
