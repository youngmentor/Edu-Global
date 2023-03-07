import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../Components/LoadingSpin/Loading'
import axios from 'axios';
const ReportCard_Stu = () => {
  const { id } = useParams()
  const [selectedFile, setSelectedFile] = useState(null);
  const [load, setLoad] = useState(false)
  const [message, setMessage] = useState('');
  const handleFileSelect = event => {
    setSelectedFile(event.target.files[0]);
    setMessage('');
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    setLoad(true)
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post(`https://eduglobal.onrender.com/api/teacher/result/${teacher._id}${id}`, formData, {
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
    <div className='ReportCardPage'>
      <form onSubmit={handleFileUpload} className="ReportForm">
        <p>Upload Result</p>
        <input type="text" placeholder='School term' className='ResultInput'/>
       <div className="ReportFile"> <input type="file" placeholder='choose a file'  onChange={handleFileSelect}  /></div>
        <button onClick={handleFileUpload} className="ReportBttn">{load ? <Loading /> : "Upload"}</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  )
}

export default ReportCard_Stu