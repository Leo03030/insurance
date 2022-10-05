import PACKAGES from "../constants/packages";
import packages from "../dataSources/packages.json";

export const requestPackages = (data) => (dispatch) => {
  try {
    return (dispatch)({
      type: PACKAGES.LOAD_SUCCESS,
      usersData: packages,
      isError: false,
      isLoading: false,
    });
  } catch (e) {
    return (dispatch)({
      type: PACKAGES.LOAD_SUCCESS,
      usersData: [],
      isError: true,
      isLoading: false,
    });
  }
};
