import React, { useEffect, useState } from 'react'
import './UpdateStudent.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent } from '../../../Redux/Features'
import Loading from '../../LoadingSpin/Loading'
import Swal from 'sweetalert2'
const UpdateStudent = () => {
  const {id}=useParams()
  const [Load, setLoad] =useState(false)
  const [successMessage, setSuccessMessage] = useState(null);
  const dispatch = useDispatch()
  // const student = useSelector((state) => state.Commerce.student)
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

  
  const handleChange = (e) => {
    SetAdd_new_student({ ...add_new_student, [e.target.name]: e.target.value });
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    console.log("clicked")
    // console.log(id)
    setLoad(true)
   await axios.post(`https://eduglobal.onrender.com/api/admin/${user._id}/${id}`, add_new_student)
   
      .then((response) => {
        setLoad(false)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'New student created',
          showConfirmButton: false,
          timer: 3000
        })
        
        // setSuccessMessage(response.data.message)
        // console.log(response.data)
        // console.log(response.data.message)
        response.status === 200 ? dispatch(addStudent(response.data.data)) : null
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          // footer: '<a href="">Why do I have this issue?</a>'
        })
        console.log(error);
        setLoad(false)
      });
  };

  useEffect(() => {


  }, []);
  return (
    <div className='AdminAddn_Students'>   
        <form onSubmit={handleAddStudent} className="AddStudent-inputWrap" >
          <h3>Register New Student</h3>
          {AddStudent.map((i) => (
            <label className="AddStudent_Label">
              {i.label}
              <input
               key={i.id}
                className="AddStudent_Inputs"
                type={i.type}
                name={i.name}
                placeholder={i.placeholder}
                required={i.required}
                onChange={handleChange}
              />
            </label>
          ))}
          <select className="AddStudent_Inputs" onChange={(e) => { SetAdd_new_student({ ...add_new_student, studentClass: e.target.value }); }}>
          {allclass.map((i) => (
              <option onClick={() => { console.log(i._id) }} placeholder="Select Class" value={i.nameOfClass}>{i.nameOfClass} {i.classBranch}</option>
            ))
            }
          </select>
           {successMessage && <p>{successMessage}</p>}
            <button type="submit" className="AddSbttn" >{Load? <Loading/>: "Add New Student"}</button>        
        </form>
    </div>
  )
}

export default UpdateStudent