import React, { useState, useEffect } from "react";
import HospitalCard from "./HospitalCard";
import data from './data.json';


const HospitalList = () => {
   
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    setHospitals(data.HOSPITAL || []);
    // setRadiologists(hospitalData.RADIOLOGISTS || []);
  }, []);




  return (
    <div className="mt-4 mr-4">
      <div className="grid grid-cols-2 gap-4">
        {/* < HospitalCard name = 'Vishwaraj Hospital' email ='info@vrhpune.in' phone='35454236657' location='Loni Kalbhor' />
        < HospitalCard name = 'Vishwaraj Hospital' email ='info@vrhpune.in' phone='35454236657' location='Loni Kalbhor' />
        < HospitalCard name = 'Vishwaraj Hospital' email ='info@vrhpune.in' phone='35454236657' location='Loni Kalbhor' /> */}
        {hospitals.map(hospital => (
          <HospitalCard key={hospital.id} hospital={hospital} />
        ))}
      </div>
    </div>
  );
};

export default HospitalList;

