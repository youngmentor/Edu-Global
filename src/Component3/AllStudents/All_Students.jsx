import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./All_Students.css"
import { useDispatch, useSelector } from "react-redux";
import Loading from '../../Components/LoadingSpin/Loading';
const All_Students = () => {
    const user = useSelector((state) => state.Commerce.user)
    const [Allstudents, setAllStudents] = useState([]);
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

        axios.post(`https://eduglobal.onrender.com/api/teacher/result/`, formData, {
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
    const getAllStudent = async (e) => {
        const res = await axios.get(`https://eduglobal.onrender.com/api/admin/allStudent/${user?._id}`)
        setAllStudents(res.data.data)
        // console.log(res.data.data)
        console.log(res)
      }
      useEffect(() => {
        getAllStudent()
    
      }, [])
      useEffect(() => {
        // console.log(res)
        // console.log(Allclass)
      }, [Allstudents, ])
    return (
        <div className='TeacherStudents_All'>
           {Allstudents?.map((i)=>(
             <div className='TeacherStudents_All_Wrap'>
             <div className='TeacherStudent_Img'>
                 <img src="/UserImg.png" alt="StudentLogo" className='TeacherStudent_Avatar' />
             </div>
             <div className='TeacherStudent_Details'>
             <p>{i.studentName}</p>
                <p>{i.regNumber}</p>
                 <div className='ResultUpload'>
                     <p>Upload Results</p>
                     <input type="file" onChange={handleFileSelect} />
                     <button onClick={handleFileUpload}>{load ? <Loading /> : "Upload"}</button>
                     {message && <p>{message}</p>}
                 </div>
             </div>
         </div>
           ))}
        </div>
    )
}

export default All_Students