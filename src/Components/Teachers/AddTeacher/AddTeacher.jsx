import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './AddTeacher.css'
import { useState } from 'react'
import axios from 'axios'
const AddTeacher = () => {
  const user = useSelector((state) => state.Commerce.user)
  const {id}=useParams()
  const [Load, setLoad] =useState(false)
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
    // subjectToTeach: "",
  }
  )
  const AddTeacher = [
    {
      id: 1,
      name: "teacherName",
      // label: "name",
      placeholder: "Name of Teacher",
      type: "text"
    },
    {
      id: 2,
      name: "phoneNumber",
      // label: "number",
      placeholder: "Mobile No",
      type: "number"
    },
    {
      id: 3,
      name: "password",
      // label: "password",
      placeholder: "Password:",
      type: "password"
    },
    {
      id: 4,
      name: "homeAddress",
      // label: "address",
      placeholder: "Home Address:",
      type: "select"
    },
    {
      id: 5,
      name: "joiningDate",
      label: "Joining date",
      placeholder: "joining date",
      type: "date"
    },
    {
      id: 6,
      name: "DOB",
      label: "Date Of Birth",
      placeholder: "Date Of Birth",
      type: "date"
    },
    {
      id: 7,
      name: "educationalLevel",
      // label: "Education",
      placeholder: "Level of Education",
      type: "text"
    },
    {
      id: 8,
      name: "experience",
      // label: "Experience",
      placeholder: "Years Of Experience",
      type: "text"
    },

    {
      id: 9,
      name: "religion",
      // label: "Religion",
      placeholder: "Religion",
      type: "text"
    },
    {
      id: 10,
      name: "gender",
      // label: "Gender",
      placeholder: "Gender",
      type: "text"
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetAddnTeacher({ ...AddnTeacher, [name]: value });
  };
  const handleAddTeacher = async(e) => {
    e.preventDefault();
    console.log("clicked")
 await axios.post(`https://eduglobal.onrender.com/api/newTeacher/${id}`)
 .then((response) => {
  setLoad(false)
  setSuccessMessage(response.data.message)
  console.log(response.data)
  console.log(response.data.message)
  response.status === 201 ? dispatch(addStudent(response.data.data)) : null
})
.catch((error) => {
  console.log(error);
});
  };
  return (
    <div className='AdminAddn_Teacher'>
      <div className='AdminAddn_TeacherWrap'>
        <form onSubmit={handleAddTeacher} className="AddTeacher-inputWrap" >
          <h3>Add A New Teacher</h3>
          {AddTeacher.map((i) => (
            <label className="AddTeacher_Label" key={i.id}  >
               {i.label}
              <input
                className="AddTeacher_Input"
                type={i.type}
                name={i.name}
                placeholder={i.placeholder}
                onChange={handleChange}
              />
            </label>
          ))}
          
          {successMessage && <p>{successMessage}</p>}
          <button type="submit" className="Addbttn">{Load? <Loading/>: "Add New Teacher"}</button>
        </form>
      </div>
    </div>
  )
}

export default AddTeacher