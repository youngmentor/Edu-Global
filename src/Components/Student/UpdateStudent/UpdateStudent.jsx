import React,{useState} from 'react'
import './UpdateStudent.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const UpdateStudent = () => {
const [AddnStudent, SetAddnStudent]= useState()
const {id}= useParams()
  const AddStudent = [
    { 
      id: 1,
        name: "name",
        label: "name",
        placeholder: "Name of Student",
        type: "text",
        required: true
    },
    {
      id: 2,
        name: "email",
        label: "email",
        placeholder: "Email Address",
        type: "email",
        required: true
    },
    {
      id: 3,
        name: "password",
        label: "password",
        placeholder: "Password",
        type: "password",
        required: true
    },
    {
      id: 4,
        name: "numbers",
        label: "number",
        placeholder: "Registration No:",
        type: "text",
        inputmode: "numeric",
        required: true
    },
    {
      id: 5,
        name: "number",
        label: "number",
        placeholder: "Student/Guardian No:",
         type: "text",
        inputmode: "numeric",
    },
    {
      id: 6,
        name: "class",
        label: "class",
        placeholder: "Select Class",
        type: "select",
        required: true
    },
    {
      id: 7,
        name: "birth",
        label: "birth",
        placeholder: "mm/dd/yy",
        type: "date",
        required: true
    },
    {
      id: 8,
        name: "date",
        label: "date",
        placeholder: "mm/dd/yy",
        type: "date",
        required: true
    },
];
const handleChange = (e) => {
  const { name, value } = e.target;
  SetAddnStudent({ ...AddnStudent, [name]: value });
};
const handleAddStudent = (e) => {
  e.preventDefault();
  console.log("clicked")
 axios.post(`https://eduglobal.onrender.com/api/admin/:${id}`, AddStudent)
 .then((response)=>{
  console.log(response.data.message)
 })
 .catch((error)=>{
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
                      <button type="submit" className="Addbttn">Add New Student</button>
            </form>
       </div>

    </div>
  )
}

export default UpdateStudent