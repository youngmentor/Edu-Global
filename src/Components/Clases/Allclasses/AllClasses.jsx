import React, { useEffect, useState } from 'react'
import "./AllClasses.css"
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { FaGraduationCap } from "react-icons/fa";
import { addClass } from '../../../Redux/Features';
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
// import { useParams } from 'react-router-dom';

const AllClasses = () => {
  // const allclass = useSelector((state) => state.Commerce.allclass)
  const navigate = useNavigate()
  const teacher = useSelector((state) => state.Commerce.teacher)
  const user = useSelector((state) => state.Commerce.user)
  const [oneteacher, setOneTeacher]=useState()
  const [Allclass, setAllClass] = useState([])
  const [change, setChange] = useState(false)
  const [teacherName, setTeacherName]= useState(false)

  const getAll = async () => {
    const res = await axios.get(`https://eduglobal.onrender.com/api/admin/allClass/${user?._id}`)
   setTeacherName(res.data.data[0].teachers[0]?.teacherName)
    setAllClass(res.data.data)
    // console.log(res.data.data[0].teachers[0]?.teacherName)
    // res.status === 201? dispatch(addClass(res.data.data)) : null
  };
  useEffect(() => {
    getAll()
    

  }, [])
  useEffect(() => {
    // console.log(res)
    // console.log(Allclass)
  }, [Allclass])
  const oneteacherdata = {...oneteacher}
  return (
    <div className='AllclassesMain' >
      <div className='AllClassCardHolder'>

        {Allclass?.map((i) => {
          return <div key={i._id} className='AllClassCard'>
            <div className='AllClassCardWrap'>
              <div className='AllClassCardDetails'>
                <h4>{i.nameOfClass} {i.classBranch}</h4>
                {/* <p>SchoolFee: {i.monthlyTutionFees}</p> */}
                <h2>{i.students.length}</h2>
                <h4>Students</h4>
              </div>
              <Link to={`/admin/student/updatestudents/${i._id}`} className='AddStudent_icon'>
                <AiOutlineUserAdd />
                <p>Add Student</p>
              </Link>
              
              <Link to={`/admin/teachers/addteacher/${i._id}`} className='AddTeacher_icon'>
              <FaChalkboardTeacher /> 
                {teacherName ? <p>{i.teachers[0]?.teacherName}</p> :  <div><FaChalkboardTeacher /> <p>Add Teacher</p></div>}
                
                
              </Link>
              {/* <div className='AllClassGraduationCap'>
                <FaGraduationCap style={{ width: "50px", height: "50px" }} />  
                <p>SchoolFee: {i.monthlyTutionFees}</p>           
              </div> */}
            </div>
          </div>
        })

        }
        <div className='AllClassCard' onClick={() => { navigate("/admin/clases/addclasses") }}>
          <h1>+</h1>
          <h1>Add New Class</h1>
        </div>
      </div>
    </div>
  )
}

export default AllClasses