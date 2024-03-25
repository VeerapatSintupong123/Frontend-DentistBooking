"use client";

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DigitalClock } from "@mui/x-date-pickers/DigitalClock";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function DateTimeReserve() {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
  const [startTime, setStartTime] = useState<Dayjs | null>(
    dayjs().tz("Asia/Shanghai")
  );
  const [endTime, setEndTime] = useState<Dayjs | null>(
    dayjs().tz("Asia/Shanghai")
  );

  return (
    <div
      className="bg-slate-100 rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex-col justify-around"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={reserveDate}
          onChange={(value) => {
            setReserveDate(value);
          }}
        />

        <div className="flex flex-row justify-around">
          <div className="border-white border-">
            <DigitalClock
              className="mx-1"
              onChange={(newValue) => {
                if (dayjs.isDayjs(newValue)) {
                  setStartTime(newValue);
                  alert(newValue.toString());
                }
              }}
              value={startTime}
            />
          </div>

          <DigitalClock
            className="mx-1"
            onChange={(newValue) => {
              if (dayjs.isDayjs(newValue)) {
                setEndTime(newValue);
              }
            }}
            value={endTime}
          />
        </div>
      </LocalizationProvider>
    </div>
  );
}
