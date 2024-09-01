import React from "react";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import HospitalList from "./component/HospitalList";
import Search from "./component/Search";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gradient-to-r from-customPurple via-customPurple1 to-pink-100 h-full ">
      <Router>
        <Navbar />
        <div className="flex flex-warp space-x-5">
          <Sidebar />
          <div className="w-screen flex flex-col">
            <Search placeholder="Search for hospitals.." />
            <div>
              <Routes>
                <Route
                  exact
                  path="/hospital"
                  element={<HospitalList page={'HOSPITAL'} />}
                ></Route>
                <Route
                  exact
                  path="/Radiologists"
                  element={<HospitalList page={'RADIOLOGISTS'} />}
                ></Route>
                <Route
                  exact
                  path="/technicial"
                  element={<HospitalList page={'TECHNICIAN'} />}
                ></Route>
                <Route
                  exact
                  path="/report"
                  element={<HospitalList page={'REPORTS'}/>}
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
