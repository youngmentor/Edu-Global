import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './AddTeacher.css'
import { useState } from 'react'
import axios from 'axios'
const AddTeacher = () => {
  // const user = useSelector((state) => state.Commerce.user)
  // const allclass = useSelector((state) => state.Commerce.allclass)
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
    const { name, value } = e.target;
    SetAddnTeacher({ ...AddnTeacher, [name]: value });
  };
  const handleAddTeacher = async(e) => {
    e.preventDefault();
    console.log("clicked")
    console.log(id)
 await axios.post(`https://eduglobal.onrender.com/api/newTeacher/${id}`, AddnTeacher)
 .then((response) => {
  console.log(id)
  setLoad(false)
  setSuccessMessage(response.data.message)
  console.log(response.data)
  console.log(response.data.message)
  // response.status === 201 ? dispatch(addStudent(response.data.data)) : null
})
.catch((error) => {
  console.log(error);
});
  };
  return (
    <div className='AdminAddnew_Teacher'>
      <div className='AdminAddnew_TeacherWrap'>
        <form onSubmit={handleAddTeacher} className="AddNewTeacher-inputWrap" >
          <h3>Add A New Teacher</h3>
          {AddTeacher.map((i) => (
            <label className="AddTeacher_Label" key={i.name}  >
               {i.label}
              <input
                className="AddTeacher_Input"
                type={i.type}
                required={i.required}
                placeholder={i.placeholder}
                onChange={handleChange}
              />
            </label>
          ))}
          
          {successMessage && <p>{successMessage}</p>}
          <button type="submit" className="AddNewbttn">{Load? <Loading/>: "Add New Teacher"}</button>
        </form>
      </div>
    </div>
  )
}

export default AddTeacher