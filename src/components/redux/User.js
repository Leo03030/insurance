import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUsers } from "./action";
import data from "../redux/Packages.json";
import '../Global.module.css'
const User = () => {
  const { isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers(data));
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      {isLoading &&
      <div className="loading">Data loading...</div>}
      <table style={{ width: "80%", marginLeft: "10%" }} border="3">
        <thead>
          <tr style={{ backgroundColor: "grey" }}>
            <th>id</th>
            <th>name</th>
            <th>address</th>
            <th>email</th>
            <th>plan</th>
          </tr>
        </thead>

        <tbody>
          {data.users.map((el) => {
            return (
              <tr>
                <td>{el.Id}</td>
                <td>{el.name}</td>
                <td>{el.address}</td>
                <td>{el.email}</td>
                <td>{el.plan}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </main>
  );
};

export default User;
