import React, {useState, useEffect} from 'react'
import { MdDelete } from "react-icons/md";
const Teachers_Card = (i) => {
  const [loader, setLoader] = useState(false)

  useEffect (() => {
      if (loader) {
          i.status === 201 ? setLoader(false) : null
      }
  }, [i.status])
  return (
    <div className='AdminTeachers_All_Wrap'>
    <div className='AdminTeachers_Img'>
        <img src="/UserImg.png" alt="StudentLogo" className='AdminTeachers_Avatar' />
    </div>
    <div className='AdminAllTeacher_Details'>
        <p>{i.teacherName}</p>
    </div>
    {loader ? <div className='AdminStudent_Loading'> deleting... </div> :
        <div className='AdminTeacher_Delete_Icon'> <MdDelete onClick={() => { i.deleteTeacher(i._id); setLoader(true) }}/></div>}

</div>
  )
}

export default Teachers_Card