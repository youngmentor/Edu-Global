import React from 'react'
import './TeacherAttendance.css'
const TeacherAttendance = () => {
    return (
        <div className='TeacherAtt'>
            <div className='TAttendanceHeader'>
                <h1>ID</h1>
                <h1>Teacher Name</h1>
                <h1>status</h1>
            </div>
            <div className='TAttendanceRecord'>
                <h3>414110</h3>
                <h3>Edidiong</h3>
                <div className='Teacher_A_Status'>
                    <p className='present'>P</p>
                    <p className='lateness'>L</p>
                    <p className='absent'>A</p>
                </div>
            </div>
            <div className='TAttendanceRecord'>
                <h3>414111</h3>
                <h3>Roqeeba</h3>
                <div className='Teacher_A_Status'>
                    <p className='present'>P</p>
                    <p className='lateness'>L</p>
                    <p className='absent'>A</p>
                </div>
            </div>
        </div>
    )
}

export default TeacherAttendance