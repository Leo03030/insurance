import PACKAGES from "../constants/packages";
import packages from "../dataSources/packages.json";

export const requestPackages = (data) => async (dispatch) => {
  dispatch({
    type: PACKAGES.LOAD,
  });
  try {
    dispatch({
      type: PACKAGES.LOAD_SUCCESS,
      usersData: packages,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: PACKAGES.LOAD_SUCCESS,
      usersData: [],
      isError: true,
    });
  }
};
