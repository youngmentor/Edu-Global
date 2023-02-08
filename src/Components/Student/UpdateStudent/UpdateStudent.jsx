import React,{useState} from 'react'
import './UpdateStudent.css'
const UpdateStudent = () => {
const [AddnStudent, SetAddnStudent]= useState()
  const AddStudent = [
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
        placeholder: "Registration No:",
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
        name: "file",
        label: "file",
        placeholder: "Choose A file",
        type: "file"
    },
    {
      id: 5,
        name: "class",
        label: "class",
        placeholder: "Select Class",
        type: "select"
    },
    {
      id: 6,
        name: "birth",
        label: "birth",
        placeholder: "mm/dd/yy",
        type: "date"
    },
];
const handleChange = (e) => {
  const { name, value } = e.target;
  SetAddnStudent({ ...AddnStudent, [name]: value });
};
const handleSubmit = (e) => {
  e.preventDefault();
};
  return (
    <div className='AdminAddn_Student'>
       <div className='AdminAddn_StudentWrap'>
       <form onSubmit={handleSubmit} className="Add-inputWrap" >
            {AddStudent.map((i) => (
                        <label key={i.name} className="AddStudent_Label">
                            <input
                                className="AddStudent_Input"
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

export default UpdateStudent