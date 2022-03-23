import axios from "axios";
import { useState, useEffect } from "react";
//import Form from './components/Form'
const Form = (props) => {
  const [formData, setForm] = useState({});

  const onChangeForm = (e) => {
    const { id, value } = e.target;
    setForm({ ...formData, [id]: value });
    console.log(formData);
  };
  const formSubmit = () => {
    function postData(url) {
      axios.post(url, formData).then(console.log("posted"));
    }
    postData("http://localhost:8080/employee");
  };
  return (
    <>
      <form onSubmit={formSubmit}>
        <h2>Emplopee Details</h2>
        <label>Name: </label>
        <input
          id="Name"
          type="text"
          placeholder="Enter Name"
          onChange={onChangeForm}
          className="px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-400"
          required
        />
        <br />
        <label>Age: </label>
        <input
          id="Age"
          type="text"
          placeholder="Enter Age"
          onChange={onChangeForm}
          className="px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-400"
          required
        />
        <br />
        <label>Address: </label>
        <input
          id="Address"
          type="text"
          placeholder="Enter Address"
          onChange={onChangeForm}
          className="px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-400"
          required
        />
        <br />
        <label>Department: </label>
        <input
          id="Department"
          type="text"
          placeholder="Enter Department"
          onChange={onChangeForm}
          className="px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-400"
          required
        />
        <br />
        <label>Salary: </label>
        <input
          id="Salary"
          type="text"
          placeholder="Enter Salary"
          onChange={onChangeForm}
          className="px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-400"
          required
        />
        <br />
        <label>Marriage: </label>
        <input
          id="MaritalCheck"
          type="text"
          placeholder="Enter Marital Status"
          onChange={onChangeForm}
          className="px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-400"
          required
        />
        <br />
        <input
          type="submit"
          className="px-1 m-1 rounded  border-2 border-blue-500 hover:bg-white hover:text-blue-500 text-white bg-blue-500"
        />
      </form>
    </>
  );
};

export default Form;
