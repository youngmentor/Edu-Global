import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { useSelector } from 'react-redux';
const Student_Card = (i) => {
    const payment = useSelector((state) => state.Commerce.payment[0])
    // const [paid, setPaid] = useState(false)
    const [loader, setLoader] = useState(false)

    useEffect (() => {
        if (loader) {
            i.status === 200 ? setLoader(false) : null
        }
        // setPaid(payment)
        // console.log(paid)
    }, [i.status])
    return (
        <div className='AdminStudents_All_Wrap'>
            <div className='AdminStudent_Img'>
                <img src="/UserImg.png" alt="StudentLogo" className='AdminStudent_Avatar' />
            </div>
            <div className='AdminAllStudent_Details'>
                <p>{i.studentName}</p>
                <p>{i.regNumber}</p>
                {payment !== false ? <p>not paid</p> : "paid"}
            </div>
            {loader ? <div className='AdminStudent_Loading'> deleting... </div> :
                <div className='AdminStudent_Delete_Icon'> <MdDelete onClick={() => { i.deleteStudent(i._id); setLoader(true) }} /></div>}

        </div>

    )
}

export default Student_Card