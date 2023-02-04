import React, {useState} from 'react'
import './AddClasses.css'
const AddClasses = () => {
    const [AddData, setAddData] = useState({});
    const Add = [
        {
            name: "name",
            label: "name",
            placeholder: "Name of class",
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
        setAddData({ ...AddData, [name]: value });
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
                                // value={loginData[i.name] || ""}
                                onChange={handleChange}
                            />
                        </label>
                    ))}
                      <button type="submit" className="Addbttn">Submit</button>
            </form>
        </div>
    )
}

export default AddClasses