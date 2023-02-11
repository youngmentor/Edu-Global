import React, { useState } from 'react'
import './AddClasses.css'
const AddClasses = () => {
    const [AddData, setAddData] = useState({});
    const Add = [
        {
            name: "name",
            label: "name",
            placeholder: "Name of Class",
            type: "text"
        },
        {
            name: "name ",
            label: "name",
            placeholder: "Name of Teacher",
            type: "text"
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
        <div className='AddClassesMain' >
            <div className='AddClassesWrap'>
                <form onSubmit={handleSubmit} className="Add-inputWrap" >
                    <h3>Add A New Class</h3>
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

export default AddClasses