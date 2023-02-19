import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import "./All_Students.css"
const All_Students = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileSelect = event => {
        setSelectedFile(event.target.files[0]);
        setMessage('');
    };

    const handleFileUpload = () => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        axios.post('/api/results/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                console.error(error);
            });
    };
    return (
        <div>
            <div className='TeacherStudents_All_Wrap'>
                <div className='TeacherStudent_Img'>
                    <img src="/UserImg.png" alt="StudentLogo" className='TeacherStudent_Avatar' />
                </div>
                <div className='TeacherStudent_Details'>
                    <p>sulito</p>
                    <p>001</p>
                    <div className='ResultUpload'>
                        <p>Upload Results</p>
                        <input type="file" onChange={handleFileSelect} />
                        <button onClick={handleFileUpload}>Upload</button>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </div>
            <NavLink className='AdminStudents_All_AddWrap' to="/admin/student/updatestudents" >
                <p>+</p>
                <p>Add New</p>
            </NavLink>
        </div>
    )
}

export default All_Students