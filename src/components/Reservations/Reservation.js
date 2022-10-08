import React, { useState } from 'react'
import Calendar from 'react-calendar';
import './Reservation.css';
import 'react-calendar/dist/Calendar.css';

const Reservation = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className="Calender">
            <div className='app'>
                <h1 className='text-center'>Book a table</h1>
                <div className='calendar-container'>
                    <Calendar onChange={setDate} value={date} />
                </div>
                <p className='text-center'>
                    <span className='bold'>Selected Date:</span>{' '}
                    {date.toDateString()}
                </p>
            </div>
        </div >
    )
}

export default Reservation