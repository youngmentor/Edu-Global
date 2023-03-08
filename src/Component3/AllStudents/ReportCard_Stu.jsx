import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../Components/LoadingSpin/Loading'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
const ReportCard_Stu = () => {
  const teacher = useSelector((state) => state.Commerce.teacher)
  const { id } = useParams()
  const [load, setLoad] = useState(false)
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [profile, setProfile]= useState({
    currentSchoolTerm: "",
	resultImage:""
  })
  const handleImage = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, resultImage: file });
  };
  const handleFileUpload = (e) => {
    e.preventDefault();
    setLoad(true)
    const formData = new FormData();
    formData.append('currentSchoolTerm', profile.currentSchoolTerm);
    formData.append('resultImage', profile.resultImage);
      //  console.log(profile)
    axios.post(`https://eduglobal.onrender.com/api/teacher/result/${teacher._id}/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'result uploaded succesfully',
          showConfirmButton: false,
          timer: 3000
        })
        setMessage(response.data.message);
        // response.status === 201 
        setLoad(false)
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          // footer: '<a href="">Why do I have this issue?</a>'
        })
        setErrorMessage(error.message);
        // console.error(error);
        setLoad(false)
      });
  };

  return (
    <div className='ReportCardPage'>
      <form onSubmit={handleFileUpload} className="ReportForm">
        <p>Upload Result</p>
        <input type="text" placeholder='School term' name="currentSchoolTerm" className='ResultInput' onChange={(e)=>{  setProfile({ ...profile, currentSchoolTerm: e.target.value })  }} />


       <div className="ReportFile"> <input type="file" placeholder='choose a file'  onChange={handleImage}  /></div>
        <button onClick={handleFileUpload} className="ReportBttn">{load ? <Loading /> : "Upload"}</button>
        {message && <p>{message}</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  )
}

export default ReportCard_Stu