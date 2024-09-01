import React from "react";
import logo from "../media/icon.png";

const HospitalCard = ({ hospital = {} }) => {
  const {
    Name = "Unknown Hospital",
    Address = "No Address Provided",
    Contact_Number = "N/A",
    Email = "N/A",
    City = '',
    Pincode = '',
    STATUS = "Unknown"
  } = hospital;

  const statusStyles = STATUS === "Active"
  ? "bg-green-100 text-green-700"
  : "bg-gray-100 text-gray-600";

  return (
    <div className="bg-white p-6 rounded-xl shadow h-45">
      <div className="flex flex-wrap space-x-4">
        <img
          src={logo}
          alt="Logo"
          className="rounded-full object-contain"
        ></img>
        <div>
          <h3 className="text-lg font-bold">{Name}</h3>
          <p className="text-sm text-purple-600">{Address} {City} {Pincode}</p>
        </div>
      </div>
      <div className="flex , flex-row gap-8 my-3">
        <p className="text-sm text-gray-600 ">P: {Contact_Number}</p>
        <p className="text-sm text-gray-600">E: {Email}</p>
      </div>
      <hr className="border-t-2 border-black" />
      <div className="flex items-center justify-around mt-4">
        <button className={`text-sm px-6 py-1 rounded ${statusStyles}`}>
          {STATUS}
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
