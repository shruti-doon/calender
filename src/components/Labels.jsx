import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold font-mono mt-3 text-lg md:text-xl lg:text-2xl">
        Labels
      </p>
      <div className="flex flex-wrap font-mono  gap-4 mt-3">
        {labels.map(({ label: lbl, checked }, idx) => (
          <label
            key={idx}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() =>
                updateLabel({ label: lbl, checked: !checked })
              }
              className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0`}
            />
            <span className="tracking-tighter text-black capitalize text-sm sm:text-base">
              {lbl}
            </span>
          </label>
        ))}
      </div>
    </React.Fragment>
  );
}
