"use client"

import { useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone'

export default function DateTimeReserve() {

    const [reserveDate, setReserveDate] = useState(null)
    const [startTime, setStartTime] = useState<Dayjs | null>();
    const [endTime, setEndTime] = useState(null)

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex-col justify-around content-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                value={reserveDate}
                onChange={(value)=> {
                    if(dayjs.isDayjs(value)) {
                        setReserveDate(value);
                    }
                }} />
                <div className="flex flex-row justify-around">
                    <div className="border-2 mx-2">
                        <p className="text-center my-2 bg-slate-200">Start Time</p>
                        <DigitalClock className="mx-1"
                        value={startTime}
                        onChange={(NewValue) => {setStartTime(NewValue); }}/>    
                    </div>
                    <div className="border-2 mx-2">
                        <p className="text-center my-2 bg-slate-200">End Time</p>
                        <DigitalClock className="mx-1" 
                        value={endTime}
                        onChange={(NewValue) => {setEndTime(NewValue); }}/>
                    </div>
                    
                </div>

                <button className="w-full h-fit bg-slate-200
                hover:bg-white">
                    Book
                </button>
            </LocalizationProvider>
        </div>
    );
}