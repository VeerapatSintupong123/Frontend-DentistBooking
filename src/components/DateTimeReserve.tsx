"use client"

import { useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';

export default function DateTimeReserve() {

    const [reserveDate, setReserveDate] = useState(null)
    const [startTime, setStartTime] = useState<Dayjs | null>(dayjs(`${new Date()}`));
    const [endTime, setEndTime] = useState(null)

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex-col justify-around">

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                value={reserveDate}
                onChange={(value)=> {setReserveDate(value);}} />

                <div className="flex flex-row justify-around">
                    <div className="border-white border-">
                        <DigitalClock className="mx-1"
                        onChange={(NewValue) => {setStartTime(NewValue); alert(NewValue); }}/>    
                    </div>
                    
                    <DigitalClock className="mx-1" 
                    onChange={(NewValue) => {setEndTime(NewValue)}}/>
                </div>
            </LocalizationProvider>
        </div>
    );
}