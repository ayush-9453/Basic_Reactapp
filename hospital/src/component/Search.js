import React from 'react';

function Search({ placeholder }) {
    return (
      <div className="flex items-center mr-4 h-14 rounded-xl shadow-lg  bg-slate-100 ">
        <div className="relative w-full p-3">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="w-5 h-5 ml-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </span>
          <input type="text" placeholder={placeholder} className="pl-10 pr-4 py-2 h-9 w-1/3 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:border-indigo-300"/>
        </div>
      </div>
    );
  }

  export default Search; 