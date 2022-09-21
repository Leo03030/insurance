import USER from "./constatns";
import userData from "./User.json";

export const requestUsers = (data) => async (dispatch) => {
  debugger;
  dispatch({
    type: USER.LOAD,
  });
  try {
    dispatch({
      type: USER.LOAD_SUCCESS,
      usersData: userData,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: USER.LOAD_SUCCESS,
      usersData: [],
      isError: true,
    });
  }
};
