import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../assets/calendar.png";
import GlobalContext from "../context/GlobalContext";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className=" px-4 py-2 flex items-center bg-slate-100 flex-col sm:flex-row sm:items-center">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <img src={logo} alt="calendar" className="w-12 h-12" />
        <h1 className="text-xl text-gray-600 font-bold font-mono uppercase tracking-widest text-center sm:text-left">
          Calendar
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto mt-4 sm:mt-0">
        <button
          onClick={handleReset}
          className="border font-mono tracking-widest rounded py-2 px-4 mr-5 ml-3 transition transform-none ease-in-out bg-slate-100 hover:bg-slate-300 text-center"
        >
          Today
        </button>
        <div className="flex items-center">
          <button onClick={handlePrevMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 hover:font-extrabold transition transform-none ease-in-out rounded-full hover:scale-150 hover:bg-slate-200">
              chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 hover:font-extrabold transition transform-none ease-in-out rounded-full hover:scale-150 hover:bg-slate-200">
              chevron_right
            </span>
          </button>
        </div>
        <h2 className="ml-4 text-xl text-gray-800 font-bold font-mono transition transform-none ease-in-out uppercase hover:scale-125 bg-slate-300 p-3 rounded-3xl text-center sm:text-left mt-4 sm:mt-0">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
      </div>
    </header>
  );
}
