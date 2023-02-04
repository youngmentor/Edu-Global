import React, {useState} from 'react'
// import './AddClasses.css'
const EditClasses = () => {
    const [EditData, setEditData] = useState({});
    const Add = [
        {
            name: "name",
            label: "name",
            placeholder: "Name of class",
            type: "text"
        },
        {
            name: "name of teacher",
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
        <div className='AddClassesMain' >
            <form onSubmit={handleSubmit} >
            {Add.map((i) => (
                        <label key={i.name}>
                            <input
                                className="AddInput"
                                type={i.type}
                                name={i.name}
                                placeholder={i.placeholder}
                                onChange={handleChange}
                            />
                        </label>
                    ))}
                      <button type="submit" className="Delete">Delete</button>

            </form>
        </div>
    )
}

export default EditClasses