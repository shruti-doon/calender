import React, { useState } from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalender";
import Labels from "./Labels";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="relative">
      {/* Hamburger Icon for small screens */}
      <button
        className="top-0 left-1 lg:hidden text-gray-600 z-10"
        onClick={toggleSidebar}
      >
        <span className="material-icons-outlined">
          {isOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 bg-slate-200 border p-4 sm:p-5 md:w-64 lg:w-72 xl:w-80 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:transform-none z-10`}
      >
        {/* Close Button inside the Sidebar */}
        <button
          className="absolute top-4 right-4 lg:hidden text-gray-600 p-2"
          onClick={closeSidebar}
        >
          <span className="material-icons-outlined">close</span>
        </button>

        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            <CreateEventButton />
            <SmallCalendar />
            <Labels />
          </div>
        </div>
      </aside>
    </div>
  );
}
