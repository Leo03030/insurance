import axios from "axios";
import USER from "./constatns";
import "./User.json";

export const requestUsers = (data) => async (dispatch) => {
  dispatch({
    type: USER.LOAD,
  });
  try {
    const json = await axios.get("User.json");
    dispatch({
      type: USER.LOAD_SUCCESS,
      usersData: json.data,
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
