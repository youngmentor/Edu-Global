import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../Components/LoadingSpin/Loading'
import axios from 'axios';
const ReportCard_Stu = () => {
  const { id } = useParams()
  const [load, setLoad] = useState(false)
  const [message, setMessage] = useState('');
  const [profile, setProfile]= useState({
    currentSchoolTerm:  "",
	resultImage:  ""
  })
  const handleImage = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, resultImage: file });
  };
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const handleFileUpload = (e) => {
    e.preventDefault();
    setLoad(true)
    const formData = new FormData();
    formData.append('currentSchoolTerm', profile.currentSchoolTerm);
    formData.append('resultImage', profile.resultImage);

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
        <input type="text" placeholder='School term' className='ResultInput' onChange={handleChange} />
       <div className="ReportFile"> <input type="file" placeholder='choose a file'  onChange={handleImage}  /></div>
        <button onClick={handleFileUpload} className="ReportBttn">{load ? <Loading /> : "Upload"}</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  )
}

export default ReportCard_Stu