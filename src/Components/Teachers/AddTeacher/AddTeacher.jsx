import React from 'react'
import './AddTeacher.css'
import { useState } from 'react'
const AddTeacher = () => {
  const [AddnTeacher, SetAddnTeacher]= useState()
  const AddTeacher = [
    { 
      id: 1,
        name: "name",
        label: "name",
        placeholder: "Name of Student",
        type: "text"
    },
    {
      id: 2,
        name: "numbers",
        label: "number",
        placeholder: "Mobile No",
        type: "number"
    },
    {
      id: 3,
        name: "number",
        label: "number",
        placeholder: "Student/Guardian No:",
        type: "number"
    },
    {
      id: 4,
        name: "Picture",
        label: "file",
        placeholder: "Choose A file",
        type: "file"
    },
    {
      id: 5,
        name: "address",
        label: "address",
        placeholder: "Home Address:",
        type: "select"
    },
    {
      id: 6,
        name: "date",
        label: "date",
        placeholder: "joining date",
        type: "date"
    },
    {
      id: 7,
        name: "birth",
        label: "birth",
        placeholder: "Date Of Birth",
        type: "date"
    },
    {
      id: 8,
        name: "education",
        label: "education",
        placeholder: "Level Of Education",
        type: "text"
    },
    {
      id: 9,
        name: "religion",
        label: "religion",
        placeholder: "Religion",
        type: "text"
    },
    {
      id: 10,
        name: "gender",
        label: "gender",
        placeholder: "Gender",
        type: "text"
    },
];
const handleChange = (e) => {
  const { name, value } = e.target;
  SetAddnTeacher({ ...AddnTeacher, [name]: value });
};
const handleSubmit = (e) => {
  e.preventDefault();
};
  return (
    <div className='AdminAddn_Teacher'>
         <div className='AdminAddn_TeacherWrap'>
       <form onSubmit={handleSubmit} className="AddTeacher-inputWrap" >
       <h3>Add A New Teacher</h3>
            {AddTeacher.map((i) => (
                        <label className="AddTeacher_Label"  key={i.label}  >
                            <input
                              label={i.label}
                                className="AddTeacher_Input"
                                type={i.type}
                                name={i.name}
                                placeholder={i.placeholder}
                                onChange={handleChange}
                            />
                        </label>
                    ))}
                      <button type="submit" className="Addbttn">Submit form</button>
            </form>
       </div>
    </div>
  )
}

export default AddTeacher