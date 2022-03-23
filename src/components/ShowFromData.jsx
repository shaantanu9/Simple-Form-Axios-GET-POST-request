import axios from "axios";
import { useState, useEffect } from "react";
//import {useState, useEffect,useRef} from 'react'
//import ShowFromData from './components/ShowFromData'
const ShowFromData = (props) => {
  const [Employee, setEmployee] = useState([]);

  useEffect(() => {
    function fetchData(url) {
      axios.get(url).then((res) => {
        setEmployee(res.data);
      });
    }
    fetchData("http://localhost:8080/employee");
  }, []);

  return (
    <>
      <p className="animate-bounce bg-indigo-700">Employee Detail </p>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Salary</th>
          <th>Department</th>
          <th>MaritalCheck</th>
        </tr>

        {Employee.map(
          ({ Name, Salary, Age, Address, Department, MaritalCheck }) => (
            <>
              <tr>
                {" "}
                <td>{Name}</td>
              </tr>
              <tr>
                {" "}
                <td>{Age}</td>
              </tr>
              <tr>
                {" "}
                <td>{Address}</td>
              </tr>
              <tr>
                {" "}
                <td>{Salary}</td>
              </tr>
              <tr>
                {" "}
                <td>{Department}</td>
              </tr>
              <tr>
                {" "}
                <td>{MaritalCheck}</td>
              </tr>
            </>
          )
        )}
      </table>
    </>
  );
};

export default ShowFromData;
