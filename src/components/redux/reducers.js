import { combineReducers } from "redux";
import packages from "./reducers/users";
import users from "./reducers/packages";

export default combineReducers({
  packages,
  users,
});
