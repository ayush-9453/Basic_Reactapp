import React from "react";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import HospitalList from "./component/HospitalList";
import Search from "./component/Search";
import Footer from "./component/Footer"; 

function App() {
  return (
    <div className="bg-gradient-to-r from-customPurple via-customPurple1 to-pink-100 h-full ">
      <Navbar />
      <div className="flex flex-warp space-x-5 ">
        <Sidebar />
        <div className="w-screen flex flex-col">
          <Search placeholder="Search for hospitals.." />
          <div>
            <HospitalList />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
