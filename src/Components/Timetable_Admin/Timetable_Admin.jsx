import React, { useState } from 'react'
import "./Timetable_Admin.css"
import axios from 'axios'
const Timetable_Admin = () => {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('file', selectedFile);
  
    axios.post('/upload', formData)
      .then(response => {
       
      })
      .catch(error => {
       
      });
  }

  return (
    <div className='Admin_TimeTable'>
      <form  onSubmit={handleSubmit} className="Admin_TimeTable_Form">
        {/* <h1>good morning timetable</h1> */}
        <input type="file" onChange={handleFileSelect} />
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        <button type="submit" className='UploadAdminBtt'>Upload TimeTable</button>
      </form>
    </div>
  )
}

export default Timetable_Admin