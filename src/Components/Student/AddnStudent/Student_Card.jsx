import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
const Student_Card = (i) => {
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
                <p>{i.studentName}</p>
                <p>{i.regNumber}</p>
                {/* <p>{i._id}</p> */}
            </div>
            {loader ? <div className='AdminStudent_Loading'> deleting... </div> :
                <div className='AdminStudent_Delete_Icon'> <MdDelete onClick={() => { i.deleteStudent(i._id); setLoader(true) }} /></div>}

        </div>

    )
}

export default Student_Card