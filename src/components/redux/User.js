import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUsers } from "./action";
import data from "./User.json";
import "./User.css";
const User = () => {
  debugger;
  const { isLoading, usersData } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    debugger;

    dispatch(requestUsers(data));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading && <div className="loading">Data loading...</div>}
      {usersData.map((user) => {
        return (
          <>
            <div key={user.Id} className="UserData_container">
              {/* <div className="content"> */}
              <div className="User_info_list">{user.name}</div>

              <div className="User_info_list">{user.email}</div>
              <div className="User_info_list">{user.address}</div>
              <div className="User_info_list">{user.plan}</div>
              {/* </div> */}
            </div>
          </>
        );
      })}
    </>
  );
};

export default User;
