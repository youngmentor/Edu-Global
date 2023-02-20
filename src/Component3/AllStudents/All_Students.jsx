import React, { useState } from 'react';
import axios from 'axios';
import "./All_Students.css"
import Loading from '../../Components/LoadingSpin/Loading';
const All_Students = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('');
    const [load, setLoad] = useState(false)
    const handleFileSelect = event => {
        setSelectedFile(event.target.files[0]);
        setMessage('');
    };

    const handleFileUpload = () => {
        setLoad(true)
        const formData = new FormData();
        formData.append('file', selectedFile);

        axios.post('', formData, {
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
        <div className='TeacherStudents_All'>
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
                        <button onClick={handleFileUpload}>{load ? <Loading /> : "Upload"}</button>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </div>
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
                        <button onClick={handleFileUpload}>{load ? <Loading /> : "Upload"}</button>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </div>
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
                        <button onClick={handleFileUpload}>{load ? <Loading /> : "Upload"}</button>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </div>
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
                        <button onClick={handleFileUpload}>{load ? <Loading /> : "Upload"}</button>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </div>
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
                        <button onClick={handleFileUpload}>{load ? <Loading /> : "Upload"}</button>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </div>
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
                        <button onClick={handleFileUpload}>{load ? <Loading /> : "Upload"}</button>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default All_Students