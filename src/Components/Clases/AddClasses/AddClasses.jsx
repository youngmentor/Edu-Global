import axios from 'axios';
import React, { useState } from 'react'
import './AddClasses.css'
import Loading from '../../LoadingSpin/Loading';
import { Navigate, useNavigate } from 'react-router-dom';
const AddClasses = () => {
    const navigate= useNavigate()
    const [successMessage, setSuccessMessage] = useState(null);
    const [Load, setLoad] =useState(false)
    const [AddData, setAddData] = useState({
        nameOfClass: "",
        classBranch: "",
        monthlyTutionFees: "",
    });
    const Add = [
        {
            name: "nameOfClass",
            label: "name",
            placeholder: "Name of Class",
            type: "text"
        },
        {
            name: "classBranch",
            label: "name",
            placeholder: "Class Branch",
            type: "text"
        },
        {
            name: "monthlyTutionFees",
            label: "name",
            placeholder: "Fee",
            type: "Number"
        },
    ]; 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddData({ ...AddData, [name]: value });
    };


    const handleSubmit = async (e) => {
        console.log("clicked")
        setLoad(true)
        e.preventDefault();
        const res = await axios.post("https://eduglobal.onrender.com/api/classNew", AddData)
      setLoad(false)
        console.log(res)
        // console.log(res.data.message)
        setSuccessMessage(res.data.message)
        res.status === 200 ? navigate('/admin/clases/allClasses') : null
    }

    return (
        <div className='AddClassesMain' >
            <div className='AddClassesWrapper'>
                <form onSubmit={handleSubmit} className="Add1-inputWrap" >
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
                     {successMessage && <p>{successMessage}</p>}
                    <button type="submit" className="Addbttn">{Load? <Loading/>: "Add New"}</button>
                </form>
            </div>
        </div>
    )


};
export default AddClasses