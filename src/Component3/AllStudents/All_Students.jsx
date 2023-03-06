import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./All_Students.css"
import { useDispatch, useSelector } from "react-redux";
import Loading from '../../Components/LoadingSpin/Loading';
import { useParams } from 'react-router-dom';
import { AiOutlineFileAdd } from "react-icons/ai";
const All_Students = () => {
    const {id } = useParams()
    const allclass = useSelector((state) => state.Commerce.teacher.teacherclass)
    const teacher = useSelector((state) => state.Commerce.teacher)
    const student = useSelector((state) => state.Commerce.student._id)
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

        axios.post(`https://eduglobal.onrender.com/api/teacher/result/${teacher._id}${student}`, formData, {
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

        try{
            const res = await axios.get(`https://eduglobal.onrender.com/api/teacher/ClassStudents/${allclass}`)
        setAllStudents(res.data.data.students)
        // console.log(res.data.data.students)
        console.log(res)
      }catch{
         
    }
    
} 
      useEffect(() => {
        getAllStudent()
    
      }, [])
      useEffect(() => {
      }, [Allstudents ])
    return (
        <div className='TeacherStudents_All'>
           {Allstudents?.map((i)=>(
             <div className='TeacherStudents_All_Wrap'>
             <div className='TeacherStudent_Img'>
                 <img src="/UserImg.png" alt="StudentLogo" className='TeacherStudent_Avatar' />
             </div>
             <div className='TeacherStudent_Details'>
             <p>{i.studentName}</p>
                <p> {i.regNumber} </p>
                 <div className='ResultUpload'>
                     {/* <p>Upload Results</p>
                     <input type="file" onChange={handleFileSelect} />
                     <button onClick={handleFileUpload}>{load ? <Loading /> : "Upload"}</button>
                     {message && <p>{message}</p>} */}
                    <div className='uploadresult'><AiOutlineFileAdd/> <p>Add Result</p></div>
                 </div>
             </div>
         </div>
            ))} 
        </div>
    )
}

export default All_Students