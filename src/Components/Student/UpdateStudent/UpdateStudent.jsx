import React, { useEffect, useState } from 'react'
import './UpdateStudent.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const UpdateStudent = () => {
  const [add_new_student, SetAdd_new_student] = useState(
    {
      studentName: "",
      email: "",
      password: "",
      regNumber: "",
      studentClass: "",
      admissionYear: "",
      guardianPhoneNumber: "",
      DOB: ""
    }
  )
  const [items, setItems] = useState([]);
  const { id } = useParams()
  const AddStudent = [
    {
      id: 1,
      name: "studentName",
      // label: "name",
      placeholder: "Name of Student",
      type: "text",
      required: true
    },
    {
      id: 2,
      name: "email",
      // label: "email",
      placeholder: "Email Address",
      type: "email",
      required: true
    },
    {
      id: 3,
      name: "password",
      // label: "password",
      placeholder: "Password",
      type: "password",
      required: true
    },
    {
      id: 4,
      name: "regNumber",
      // label: "number",
      placeholder: "Registration No:",
      type: "text",
      inputmode: "numeric",
      required: true
    },
    {
      id: 5,
      name: "guardianPhoneNumber",
      // label: "number",
      placeholder: "Student/Guardian No:",
      type: "text",
      inputmode: "numeric",
    },
    {
      id: 6,
      name: "studentClass",
      // label: "class",
      placeholder: "Select Class",
      type: "select",
      required: true
    },
    {
      id: 7,
      name: "DOB",
      label: "Date Of Birth",
      placeholder: "mm/dd/yy",
      type: "date",
      required: true
    },
    {
      id: 8,
      name: "admissionYear",
      label: "Date of Admission",
      placeholder: "mm/dd/yy",
      type: "date",
      required: true
    },
  ];

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('value'));
    if (items) {
      setItems(items);
    }
    console.log(items.data.data._id)
  }, []);
  const handleChange = (e) => {
    // const { name, value } = e.target;
    SetAdd_new_student({ ...add_new_student, [e.target.name]: e.target.value });
  };
  const handleAddStudent = (e) => {
    e.preventDefault();
    console.log("clicked")
    axios.post(`https://eduglobal.onrender.com/api/admin/${items.data.data._id}`, add_new_student)
      .then((response) => {
        console.log(res.data)
        console.log(response.data.message)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='AdminAddn_Student'>
      <div className='AdminAddn_StudentWrap'>
        <form onSubmit={handleAddStudent} className="Add-inputWrap" >
          <h3>Register New Student</h3>
          {AddStudent.map((i) => (
            <label key={i.name} className="AddStudent_Label">
              {i.label}
              <input
                className="AddStudent_Input"
                type={i.type}
                name={i.name}
                placeholder={i.placeholder}
                required={i.required}
                onChange={handleChange}
              />
            </label>
          ))}
          <div className='AddStudentDiv'>
            <button type="submit" className="AddSbttn">Add New Student</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateStudent