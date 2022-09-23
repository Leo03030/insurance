import React from "react";
import data from "../redux/Packages.json";
import '../Global.module.css'
console.log(data)
const Insurance = (props) => {
  return (
    <main>
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
          {data.packages.map((el) => {
            console.log(el)
            return (
              <tr>
                <td>{el.id}</td>
                <td>{el.price}</td>
                <td>{el.name}</td>
                <td>{el.perioud}</td>
                <td>{el.month}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </main>
  );
};

export default Insurance;
