import React from 'react'
import './StudentAttendance.css'
const StudentAttendance = () => {
    return (
        <div className='StudentAtt'>
            <div className='SAttendanceHeader'>
                <h1>ID</h1>
                <h1>Student Name</h1>
                <h1>status</h1>
            </div>
            <div className='SAttendanceRecord'>
                <h3>414110</h3>
                <h3>Balikis</h3>
                <div className='Student_A_Status'>
                    <p className='present'>P</p>
                    <p className='lateness'>L</p>
                    <p className='absent'>A</p>
                </div>
            </div>
            <div className='SAttendanceRecord'>
                <h3>414110</h3>
                <h3>Godwin</h3>
                <div className='Student_A_Status'>
                    <p className='present'>P</p>
                    <p className='lateness'>L</p>
                    <p className='absent'>A</p>
                </div>
            </div>
        </div>
    )
}

export default StudentAttendance