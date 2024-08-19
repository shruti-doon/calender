import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { getMonth } from "./util";

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const {
    monthIndex,
    setSmallCalendarMonth,
    setDaySelected,
    daySelected,
  } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }

  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currDay === slcDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else {
      return "";
    }
  }

  return (
    <div className="mt-4 p-2 sm:p-4 bg-slate-50">
      <header className="flex justify-between items-center mb-2 sm:mb-4">
        <p className="text-gray-700 font-extrabold text-xs sm:text-sm md:text-base">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <div>
          <button onClick={handlePrevMonth} className="p-1">
            <span className="material-icons-outlined cursor-pointer text-gray-600 text-s sm:text-md md:text-md hover:font-extrabold transition transform-none ease-in-out rounded-full hover:scale-125 hover:bg-slate-200">
              chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth} className="p-1">
            <span className="material-icons-outlined cursor-pointer text-gray-600 text-s sm:text-md md:text-md hover:font-extrabold transition transform-none ease-in-out rounded-full hover:scale-125 hover:bg-slate-200">
              chevron_right
            </span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 gap-x-1 gap-y-1 text-xs sm:text-sm md:text-sm ">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-center py-1 font-extrabold transtion transform ease-in hover:scale-125">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
                className={`py-2 w-full text-center ${getDayClass(day)} hover:bg-slate-200 rounded-full`}
              >
                <span>{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
