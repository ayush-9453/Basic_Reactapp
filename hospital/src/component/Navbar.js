import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gradient-to-r from-customPurple via-customPurple1 to-pink-100 h-12">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-3">
          <a
            href="http://localhost:3000/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://www.svgrepo.com/show/104921/person-shape.svg"
              className="h-5"
              alt="Hospital Logo"
            />
            <span className=" text-lg font-bold whitespace-nowrap  dark:text-white">
              Scanalyst
            </span>
          </a>
        </div>
      </nav>
      <nav className="bg-white flex flex-wrap justify-between m-5 mt-2 rounded-lg shadow-md">
        <div className="mt-8 max-w-6xl px-7 flex ">
          <div className="flex space-x-4">
            <button className="bg-purple-200 font-semibold hover:bg-purple-500 hover:text-white py-1 px-6 rounded-tl rounded-tr">
            <Link className="dropdown-item" to="/hospital">Hospitals (2) </Link>
            </button>
            <button className="bg-purple-200 hover:text-white hover:bg-purple-500 font-semibold px-6 py-1 rounded-tl rounded-tr">
            <Link className="dropdown-item" to="/Radiologists">Radiologists (15)</Link>
            </button>
            <button className="bg-purple-200 hover:text-white hover:bg-purple-500 font-semibold px-6 py-1 rounded-tl rounded-tr">
            <Link className="dropdown-item" to="/technicial">Technicians (5) </Link>
            </button>
            <button className="bg-purple-200 hover:text-white hover:bg-purple-500 font-semibold  px-6 py-1 rounded-tl rounded-tr">
            <Link className="dropdown-item" to="/report">Reports (0) </Link>
            </button>
          </div>
        </div>
        <div className='flex my-4 mb-1 mx-4'>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm font-semibold px-5 py-1 text-center inline-flex items-center"
              type="button"
            >
              +Add/Update User
              <svg
                className ="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
