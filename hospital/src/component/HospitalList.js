import React, { useState, useEffect} from "react";
import HospitalCard from "./HospitalCard";
import data from './data.json';


const HospitalList = ({page}) => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    // Adjust based on the `page` prop
    const fetchData = () => {
      switch(page) {
        case 'HOSPITAL':
          setHospitals(data.HOSPITAL || []);
          break;
        case 'RADIOLOGISTS':
          setHospitals(data.RADIOLOGISTS || []);
          break;
        case 'TECHNICIAN':
          setHospitals(data.TECHNICIAN || []);
          break;
        case 'REPORTS':
          setHospitals(data.REPORTS || []);
          break;
        default:
          setHospitals([]);
      }
    };
    fetchData();
  }, [page]);




  return (
    <div className="mt-4 mr-4">
      <div className="grid grid-cols-2 gap-4">
        {hospitals.map(hospital => (
          <HospitalCard key={hospital.id} hospital={hospital} />
        ))}
      </div>
    </div>
  );
};

export default HospitalList;

