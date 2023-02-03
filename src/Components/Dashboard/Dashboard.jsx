import './dashboard.css'
import Calendar from 'react-calendar'
import React, { useState } from 'react'


export default function Dashboard() {
    const [date, setDate] = useState(new Date());

    const handleChange = (selectedDate) => {
        setDate(selectedDate);
    };
    return (

        <div className='AdminRight'>
            <div className='AdminwelcomeMssg'>
                <div>
                    <h3>Welcome to admin dashboard</h3>
                </div>
            </div>
            <div className='AdminCardHolder'>
                <div className='AdminCard'>
                    <h1>Cards</h1>
                </div>
                <div className='AdminCard'>
                    <h1>Cards</h1>
                </div>
                <div className='AdminCard'>
                    <h1>Cards</h1>
                </div>
                <div className='AdminCard'>
                    <h1>Cards</h1>
                </div>
            </div>
            <Calendar onChange={handleChange} value={date} className="Calender" />
        </div>
    )
}