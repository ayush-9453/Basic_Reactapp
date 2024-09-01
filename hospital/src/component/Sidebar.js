import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 ml-5 bg-slate-100 rounded-xl shadow-lg p-4 h-screen">
      <div className="flex justify-between ">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <button className="text-sm text-black underline mb-3">Clear All</button>
      </div>
      <div className="space-y-4 overflow-hidden">
        <Dropdown label="Hospital name" />
        <Dropdown label="City" />
        <Dropdown label="Report Status" />
        <Dropdown label="AI Status" />
      </div>
    </div>
  );
};

export default Sidebar;

function Dropdown({ label }) {
  return (
    <div className="relative">
      <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-2 pb-1 text-sm rounded-lg shadow-sm leading-tight focus:outline-none focus:shadow-outline">
        <option>{label}</option>
        {/* Add your options here */}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-5-5h10l-5 5z" />
        </svg>
      </div>
    </div>
  );
}
