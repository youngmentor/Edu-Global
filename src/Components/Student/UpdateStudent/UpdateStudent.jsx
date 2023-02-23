import React, { useEffect, useState } from 'react'
import './UpdateStudent.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
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
  const user = useSelector((state) => state.Commerce.user)
  const allclass = useSelector((state) => state.Commerce.allclass)
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
    // {
    //   id: 6,
    //   name: "studentClass",
    //   // label: "class",
    //   placeholder: "Select Class",
    //   type: "select",
    //   required: true
    // },
    {
      id: 6,
      name: "DOB",
      label: "Date Of Birth",
      placeholder: "mm/dd/yy",
      type: "date",
      required: true
    },
    {
      id: 7,
      name: "admissionYear",
      label: "Date of Admission",
      placeholder: "mm/dd/yy",
      type: "date",
      required: true
    },
  ];

  useEffect(() => {


  }, []);








  const handleChange = (e) => {
    SetAdd_new_student({ ...add_new_student, [e.target.name]: e.target.value });
  };

  const handleAddStudent = (e) => {
    console.log(add_new_student.studentClass.slice(0, 3))



    // const Get = allclass.map((i) => {
    //   i._id === add_new_student?.studentClass.slice(0, 3)
    // })

    // console.log(Get)
    e.preventDefault();
    console.log("clicked")
    axios.post(`https://eduglobal.onrender.com/api/admin${user?._id}:${allclass?._id}`, add_new_student)
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
        <form onSubmit={handleAddStudent} className="Add-inputWrap" >
          <h3>Register New Student</h3>
          {AddStudent.map((i) => (
            <label key={i.id} className="AddStudent_Label">
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
          <select className="AddStudent_Input" onChange={(e) => { SetAdd_new_student({ ...add_new_student, studentClass: e.target.value }); }}  >
            {allclass.map((i) => (
              <option onClick={() => { console.log(i._id) }} placeholder="Select Class">{i.nameOfClass} {i.classBranch}</option>
            ))
            }
          </select>
            <button type="submit" className="AddSbttn">Add New Student</button>        
        </form>
    </div>
  )
}

export default UpdateStudent