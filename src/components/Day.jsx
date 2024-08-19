import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  return (
    <div className="hover:bg-gray-100 bg-white/90  border-gray-200 flex flex-col border rounded-xl " 
    onClick={() => {
      setDaySelected(day);
      setShowEventModal(true);
    }}>
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-lg mt-1 font-mono  underline ">
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p
          className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()} border p-1 rounded-full border-1  border-amber-200 border-1 `}
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
  
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 border-2 border-gray-100 p-1 ml-2 mr-3 text-gray-600 text-sm rounded-md mb-1 truncate font-bold`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}