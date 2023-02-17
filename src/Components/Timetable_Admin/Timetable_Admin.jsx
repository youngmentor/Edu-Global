import React, { useState } from 'react'
import "./Timetable_Admin.css"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
const Timetable_Admin = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [fileUrl, setFileUrl] = useState(null);
  // const addProduc = useSelector((state) => state.Commerce.addProduct)
  // const dispach = useDispatch()


  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('file', selectedFile);
  
    axios.post('/upload', formData)
      .then(response => {
        setFileUrl(URL.createObjectURL(selectedFile));
      })
      .catch(error => {
       
      });
  }

  const downloadFile = () => {
    axios.get(fileUrl, {
      responseType: 'blob'
    })
    .then(response => {
      const url = URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement('a');
      a.href = url;
      a.download = selectedFile.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    })
    .catch(error => {
      // Handle any errors
    });
  }

  return (
    <div className='Admin_TimeTable'>
      <form  onSubmit={handleSubmit} className="Admin_TimeTable_Form">
        {/* <h1>good morning timetable</h1> */}
        <input type="file" onChange={handleFileSelect} />
        {/* {fileUrl && <iframe src={fileUrl} title="Uploaded file" />} */}
        {fileUrl && <img src={fileUrl} alt="Uploaded file" />}
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        <button type="submit" className='UploadAdminBtt'>Upload TimeTable</button>
        {fileUrl && <button onClick={downloadFile} className='UploadAdminBtt' >Download</button>}
      </form>
    </div>
  )
}

export default Timetable_Admin