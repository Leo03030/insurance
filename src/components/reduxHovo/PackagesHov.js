import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUsers } from "./action";
import data from "./packages.json";

const InsurancePack = () => {
  const { isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers(data));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading && <div className="loading">Data loading...</div>}
      <table style={{ width: "80%", marginLeft: "10%" }} border="3">
        <thead>
          <tr style={{ backgroundColor: "grey" }}>
            <th>code</th>
            <th>name</th>
            <th>description</th>
            <th>price</th>
            <th>period</th>
          </tr>
        </thead>

        <tbody>
          {data.map((el) => {
            return (
              <tr>
                <td>{el.code}</td>
                <td>{el.name}</td>
                <td>{el.description}</td>
                <td>{el.price}</td>
                <td>{el.period}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default InsurancePack;
