import React, { useState } from 'react'
import './EditClasses.css'
const EditClasses = () => {
    const [EditData, setEditData] = useState({});
    const Add = [
        {
            name: "name",
            label: "name",
            placeholder: "Name of Class",
            type: "text"
        },
        {
            name: "name",
            label: "name",
            placeholder: "Name of Teacher",
            type: "text"
        },
    ];
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...EditData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className='EditClassesMain' >
            <div className='EditClassesWrap'>
                <form onSubmit={handleSubmit} className="Edit-inputWrap" >
                    {Add.map((i) => (
                        <label key={i.name} className="EditLabel">
                            <input
                                className="EditInput"
                                type={i.type}
                                name={i.name}
                                placeholder={i.placeholder}
                                onChange={handleChange}
                            />
                        </label>
                    ))}
                    <button type="submit" className="Editbttn">Delete</button>

                </form>
            </div>
        </div>
    )
}

export default EditClasses