import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './AddTeacher.css'
import { useState } from 'react'
import axios from 'axios'
import Loading from '../../LoadingSpin/Loading'
import { addTeacher } from '../../../Redux/Features'
import Swal from 'sweetalert2'
const AddTeacher = () => {
  // const user = useSelector((state) => state.Commerce.user)
  // const allclass = useSelector((state) => state.Commerce.allclass)
  const { id } = useParams()
  const [Load, setLoad] = useState(false)
  const Navigate = useNavigate()
  const [successMessage, setSuccessMessage] = useState(null);
  const [AddnTeacher, SetAddnTeacher] = useState({
    teacherName: "",
    gender: "",
    email: "",
    password: "",
    homeAddress: "",
    phoneNumber: "",
    joiningDate: "",
    educationalLevel: "",
    DOB: "",
    experience: "",
    // salary: "",
    subjectToTeach: "",
  }
  )
  const AddTeacher = [
    {
      id: 1,
      name: "teacherName",
      // label: "name",
      placeholder: "Name of Teacher",
      type: "text",
      required: true
    },
    {
      id: 2,
      name: "phoneNumber",
      // label: "number",
      placeholder: "Mobile No",
      type: "number",
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
      name: "email",
      // label: "password",
      placeholder: "Email",
      type: "text",
      required: true
    },
    {
      id: 5,
      name: "homeAddress",
      // label: "address",
      placeholder: "Home Address:",
      type: "text",
      required: true
    },
    {
      id: 6,
      name: "joiningDate",
      label: "Joining date",
      placeholder: "joining date",
      type: "date",
      required: true
    },
    {
      id: 7,
      name: "DOB",
      label: "Date Of Birth",
      placeholder: "Date Of Birth",
      type: "date",
      required: true
    },
    {
      id: 8,
      name: "educationalLevel",
      // label: "Education",
      placeholder: "Level of Education",
      type: "text",
      required: true
    },
    {
      id: 9,
      name: "experience",
      // label: "Experience",
      placeholder: "Years Of Experience",
      type: "text",
      required: true
    },

    {
      id: 10,
      name: "religion",
      // label: "Religion",
      placeholder: "Religion",
      type: "text",
      required: true
    },
    {
      id: 11,
      name: "gender",
      // label: "Gender",
      placeholder: "Gender",
      type: "text",
      required: true
    },
    {
      id: 12,
      name: "subjectToTeach",
      // label: "Gender",
      placeholder: "Subject to Offer",
      type: "text",
      required: true
    },
  ];
  const handleChange = (e) => {
    SetAddnTeacher({ ...AddnTeacher, [e.target.name]: e.target.value });
  };
  const handleAddTeacher = async (e) => {
    e.preventDefault();
    console.log("clicked")
    setLoad(true)
    const res = await axios.post(`https://eduglobal.onrender.com/api/admin/${id}`, AddnTeacher)
    .then((response) =>{
          Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'New student created',
      showConfirmButton: false,
      timer: 3000
    })
    setLoad(false)
    setSuccessMessage(res.data.message)
    console.log(res.data)
    console.log(res.data.message)
    res.status === 200 ? dispatch(addTeacher(response.data.data)) : null
    res.status === 201 ? Navigate('/admin/clases/allClasses') : null
    })
    .catch((error) =>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
      console.log(error);
      setLoad(false)
    })
  };
  return (
    <div className='AdminAddnew_Teacher_Main'>
      <div className='AdminAddnew_TeacherWrapper'>
        <form onSubmit={handleAddTeacher} className="AddNewTeacher-inputWrapper" >
          <h3>Add A New Teacher</h3>
          {AddTeacher.map((i) => (
            <label className="AddTeacher_Label" key={i.name}  >
              {i.label}
              <input
                className="AddTeacher_Inputs"
                key={i.id}
                type={i.type}
                name={i.name}
                placeholder={i.placeholder}
                required={i.required}
                onChange={handleChange}
              />
            </label>
          ))}

          {successMessage && <p>{successMessage}</p>}
          <button type="submit" className="AddNewTeacherbttn">{Load ? <Loading /> : "Add New Teacher"}</button>
        </form>
      </div>
    </div>
  )
}

export default AddTeacher