import React, {useState, useEffect} from 'react'
import { MdDelete } from "react-icons/md";
const Teachers_Card = (i) => {
  const [loader, setLoader] = useState(false)

  useEffect (() => {
      if (loader) {
          i.status === 200 ? setLoader(false) : null
      }
  }, [i.status])
  return (
    <div className='AdminStudents_All_Wrap'>
    <div className='AdminStudent_Img'>
        <img src="/UserImg.png" alt="StudentLogo" className='AdminStudent_Avatar' />
    </div>
    <div className='AdminAllStudent_Details'>
        <p>{i.teacherName}</p>

    </div>
    {loader ? <div className='AdminStudent_Loading'> deleting... </div> :
        <div className='AdminStudent_Delete_Icon'> <MdDelete /></div>}

</div>
  )
}

export default Teachers_Card