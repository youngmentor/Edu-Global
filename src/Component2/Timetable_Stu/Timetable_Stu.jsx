import './Timetable_Stu.css'
import React, { useState } from 'react'
import axios from 'axios'

const Timetable_Stu = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [fileUrl, setFileUrl] = useState(null);

  
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

  return (
    <div  className='Student_TimeTable'>
        <form  onSubmit={handleSubmit} className="Student_TimeTable_Form">
        {/* <h1>good morning timetable</h1> */}
        <input type="file" onChange={handleFileSelect} />
        {/* {fileUrl && <iframe src={fileUrl} title="Uploaded file" />} */}
        {fileUrl && <img src={fileUrl} alt="Uploaded file" />}
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        <button type="submit" className='UploadAdminBtt'>Upload TimeTable</button>
        {fileUrl && <button onClick={downloadFile} className='UploadStudentBtt' >Download</button>}
      </form>
    </div>
  )
}

export default Timetable_Stu