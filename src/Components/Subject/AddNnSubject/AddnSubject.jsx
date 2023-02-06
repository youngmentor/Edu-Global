import React, {useState} from 'react'

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
            name: "name",
            label: "name",
            placeholder: "Name of subject",
            type: "text"
        },
        {
          id: 3,
            name: "Number",
            label: "number",
            placeholder: "Marks",
            type: "number"
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
    <div>
         <div className='AddClassesWrap'>
        <form onSubmit={handleSubmit} className="Add-inputWrap" >
            {Add.map((i) => (
                        <label key={i.name} className="AddLabel">
                            <input
                                className="AddInput"
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
    
    