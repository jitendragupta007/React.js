import moment from 'moment/moment';
import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

const SelectDate = ({ setSelectDate }) => {
    const [date, setDate] = useState(new Date());

    const slectedDate = moment(date).toDate();
  
useEffect(()=>{
    setSelectDate( moment(date).format('DD/MM/YYYY'));
},[date]);

    const handelDateChange = (date) => {

        setDate(date)
    }


    return (
        //selected={date}
        <>
            
            <DatePicker selected={slectedDate} onChange={(date) => handelDateChange(date)} />
        </>
    )
}

export default SelectDate
