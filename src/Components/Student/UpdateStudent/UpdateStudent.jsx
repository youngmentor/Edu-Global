import React,{useState} from 'react'

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
        name: "number",
        label: "number",
        placeholder: "Registration No:",
        type: "number"
    },
    {
      id: 3,
        name: "file",
        label: "file",
        placeholder: "Choose A file",
        type: "file"
    },
    {
      id: 4,
        name: "class",
        label: "class",
        placeholder: "Select Class",
        type: "select"
    },
    {
      id: 5,
        name: "birth",
        label: "birth",
        placeholder: "mm/dd/yy",
        type: "date"
    },
];
const handleChange = (e) => {
  const { name, value } = e.target;
  setAddData({ ...AddnStudent, [name]: value });
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
                                className="AddInput"
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