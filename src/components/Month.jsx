import React from "react";
import Day from "./Day";

export default function Month({ month }) {
  return (
    <div className="flex-1 grid grid-cols-7 gap-1 bg-slate-50 sm:gap-2">
      {month.map((row, rowIdx) => (
        <React.Fragment key={rowIdx} className='border rounded-lg'>
          {row.map((day, dayIdx) => (
            <Day day={day} key={dayIdx} rowIdx={rowIdx} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
