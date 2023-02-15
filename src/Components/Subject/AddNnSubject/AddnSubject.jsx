import React, {useState} from 'react'
import "./AddnSubject.css"
const AddnSubject = () => {
  const [AddData, setAddData] = useState({});
    const Add = [
        { 
          id: 1,
            name: "name",
            label: "name",
            placeholder: "select Class",
            type: "text"
        },
        {
          id: 2,
            name: "Subject",
            label: "name",
            placeholder: "Name of subject",
            type: "text"
        },
        {
          id: 3,
            name: "Number",
            label: "number",
            placeholder: "Marks",
            type: "text",
            inputmode: "numeric",
        },
    ];
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddData({ ...AddData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
  return (
    <div className='AddSubjectMain' >
         <div className='AddSubjectWrap'>
        <form onSubmit={handleSubmit} className="AddSub-inputWrap" >
        <h3>Add A New Subject</h3>
            {Add.map((i) => (
                        <label key={i.name} className="AddSubLabel">
                            <input
                                className="AddSubInput"
                                type={i.type}
                                name={i.name}
                                placeholder={i.placeholder}
                                // value={loginData[i.name] || ""}
                                onChange={handleChange}
                            />
                        </label>
                    ))}
                      <button type="submit" className="Addbttn">Add New</button>
            </form>
        </div>
    </div>
  )
}

export default AddnSubject
    
    