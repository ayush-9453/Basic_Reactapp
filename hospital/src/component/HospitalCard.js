import React from "react";
import logo from "../media/icon.png";

const HospitalCard = ({hospital}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow h-45">
      <div className="flex flex-wrap space-x-4">
        <img
          src={logo}
          alt="Logo"
          className="rounded-full object-contain"
        ></img>
        <div>
          <h3 className="text-lg font-bold">{hospital.Name}</h3>
          <p className="text-xm text-purple-600">{hospital.Address}</p>
        </div>
      </div>
      <div className="flex , flex-row gap-8 my-3">
        <p className="text-sm text-gray-600 ">P: {hospital.Contact_Number}</p>
        <p className="text-sm text-gray-600">E: {hospital.Email}</p>
      </div>
      <hr class="border-t-2 border-black" />
      <div className="flex items-center justify-around mt-4">
        <button className="bg-green-100 text-green-700 text-sm px-6 py-1 rounded">
          Active
        </button>
        <button className="bg-green-100 text-green-700 text-sm px-6 py-1 rounded">
          Full Access
        </button>
        <button className="bg-gray-700 text-gray-100 text-sm px-6 py-1 rounded">
          View Logs
        </button>
      </div>
    </div>
  );
};

export default HospitalCard;
