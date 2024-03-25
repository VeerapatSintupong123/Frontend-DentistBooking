"use client";

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import GetUser from "@/libs/getUser";
import GetDentist from "@/libs/getDentist";


export default function DateTimeReserve() {
  const [reserveDate, setReserveDate] = useState(null);
  const [startTime, setStartTime] = useState<Dayjs | null>(
    dayjs(`${new Date()}`)
  );
  const [endTime, setEndTime] = useState(null);

    const [reserveDate, setReserveDate] = useState(null)
    const [startTime, setStartTime] = useState<Dayjs | null>(dayjs(new Date()));
    const [dentist, setDentist] = useState(null)
    
    const bookmang = async () => {
        const session = await getServerSession(authOptions);
        if (!session || !session.user.token) return null;
      
        const profile = await GetUser(session.user.token);
        const dentist = await GetDentist(session.user.token)

        const res = await fetch(`/api/booking`,{
            method:"POST",
            body: JSON.stringify({
                user: profile.data._id,
                dentistId: dentist.data._id,
                bookDate: startTime?.toString(),
            })
        })
    }

    return (
        <div className="bg-slate-100 rounded-lg space-y-4
        w-fit px-10 py-5 flex flex-col justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                value={reserveDate}
                onChange={(value)=> {
                    if(dayjs.isDayjs(value)) {
                        setReserveDate(value);
                    }
                }} />
                <div className="w-full text-center border-2 rounded-xl">
                    <p className="w-full my-2 bg-slate-200 my-0">Time</p>
                    <DigitalClock className="mx-1"
                    value={startTime}
                    onChange={(NewValue) => {setStartTime(NewValue); alert(NewValue)}}/>   
                    
                </div>
                <p >Every Session Only Take Within an Hour</p> 
                <button className="w-full h-fit bg-slate-200 shadow-lg p-2 rounded-md
                hover:bg-white hover:shadow-3xl"
                onClick={(e) => {
                    bookmang()
                }}>
                    Book
                </button>
            </LocalizationProvider>
        </div>
  );
}
