import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUsers } from "../redux/actions/users";
import "../Global.module.css";
const User = () => {
  const { isLoading, usersData } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      {isLoading && <div className="loading">Data loading...</div>}
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
          {usersData.map((el) => {
            return (
              <tr key={el.id}>
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
