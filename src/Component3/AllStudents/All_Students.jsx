import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./All_Students.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Loading from '../../Components/LoadingSpin/Loading';
import { useParams } from 'react-router-dom';
import { AiOutlineFileAdd } from "react-icons/ai";
const All_Students = () => {
    const { id } = useParams()
    const allclass = useSelector((state) => state.Commerce.teacher.teacherclass)
    const teacher = useSelector((state) => state.Commerce.teacher)
    const student = useSelector((state) => state.Commerce.student._id)
    const [Allstudents, setAllStudents] = useState([]);

    const getAllStudent = async (e) => {

        try {
            const res = await axios.get(`https://eduglobal.onrender.com/api/teacher/ClassStudents/${allclass}`)
            setAllStudents(res.data.data.students)
            // console.log(res.data.data.students)
            // console.log(res)
        } catch {

        }

    }
    useEffect(() => {
        getAllStudent()

    }, [])
    useEffect(() => {
    }, [Allstudents])
    return (
        <div className='TeacherStudents_All'>
            {Allstudents?.map((i) => (
                <div className='TeacherStudents_All_Wrap'>
                    <div className='TeacherStudent_Img'>
                        <img src="/UserImg.png" alt="StudentLogo" className='TeacherStudent_Avatar' />
                    </div>
                    <div className='TeacherStudent_Details'>
                        <p>{i.studentName}</p>
                        <p> {i.regNumber} </p>
                        <div className='ResultUpload'>
                            <Link className='uploadresult' to={"reportcardstudent"} >
                                <AiOutlineFileAdd /> <p>Add Result</p>
                            </Link>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default All_Students