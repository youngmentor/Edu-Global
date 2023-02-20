import React, { useState } from 'react'
import "./Timetable_Admin.css"
import axios from 'axios'
const Timetable_Admin = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/timetable', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className='Admin_TimeTable'>
     <div>
      <h2>Upload Timetable</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select a file:
          <input type="file" onChange={handleFileChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
  )
}

export default Timetable_Admin 
