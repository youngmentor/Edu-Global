import React, {useState, useEffect} from 'react'
import './AddnStudent.css'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const AddnStudent = () => {
  // const navigate = useNavigate()
  const [students, setStudents] = useState([]);
  const [items, setItems] = useState([]);
  const {id}= useParams()


  useEffect(() => {

    // const items = JSON.parse(localStorage.getItem('value'));
    if (items) {
      setItems(items);
    }
    // console.log(items.data.data._id)

    axios.get(`https://eduglobal.onrender.com/api/admin/allStudent/${items.data.data._id}`)
      .then((response) => {
        setStudents(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className='AdminStudents_All'>
      <div className='AdminStudents_All_Wrap'>
       <div className='AdminStudent_Img'> 
       <img src="/UserImg.png" alt="StudentLogo" className='AdminStudent_Avatar' />
       </div>
          <div className='AdminStudent_Details'>
          <p>sulito</p>
          <p>001</p>
         </div>
      </div>
      {/* <div className='AdminStudents_All_Wrap'>
       <div className='AdminStudent_Img'> 
       <img src="/UserImg.png" alt="StudentLogo" className='AdminStudent_Avatar' />
       </div>
       <div className='AdminStudent_Details'>
        <p>111009</p>
        <p>suliton</p>
       </div>
      </div>
      <div className='AdminStudents_All_Wrap'>
       <div className='AdminStudent_Img'> 
       <img src="/UserImg.png" alt="StudentLogo" className='AdminStudent_Avatar' />
       </div>
       <div className='AdminStudent_Details'>
        <p>111009</p>
        <p>suliton</p>
       </div>
      </div>
      <div className='AdminStudents_All_Wrap'>
       <div className='AdminStudent_Img'> 
       <img src="/UserImg.png" alt="StudentLogo" className='AdminStudent_Avatar' />
       </div>
       <div className='AdminStudent_Details'>
        <p>111009</p>
        <p>suliton</p>
       </div>
      </div> */}
      <NavLink className='AdminStudents_All_AddWrap' to="/admin/student/updatestudents" >
           <p>+</p>
           <p>Add New</p>
      </NavLink>
    </div>
  )
}

export default AddnStudent