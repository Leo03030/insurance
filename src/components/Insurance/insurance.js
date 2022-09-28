import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestPackages } from "../redux/actions/packages";
import "../Global.module.css";
import Input from "../Input";
import { Wrapper } from "../Wrapper/Wrapper";

const Insurance = (props) => {
  const { isLoading, usersData } = useSelector((state) => state.packages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPackages());
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
            <th>price</th>
          </tr>
        </thead>

        <tbody>
          {usersData.map((el) => {
            return (
              <Wrapper>
                <Input type="checkbox" />

                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.price}</td>
                  <td>{el.name}</td>
                  <td>{el.perioud}</td>
                  <td>{el.month}</td>
                </tr>
              </Wrapper>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default Insurance;
