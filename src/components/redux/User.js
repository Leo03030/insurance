import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUsers } from "./action";
import data from "./User.json";
import "./User.css";
const User = () => {
  const { isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers(data));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading && <div className="loading">Data loading...</div>}
      {data.map((data) => {
        return (
          <div key={JSON.stringify(data.Id)} className="UserData_container">
            <div className="content">
              <h1>{JSON.stringify(data.name)}</h1>
              <span>{JSON.stringify(data.email)}</span>
              <h3>{JSON.stringify(data.address)}</h3>
              <h1>{JSON.stringify(data.plan)}</h1>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default User;
