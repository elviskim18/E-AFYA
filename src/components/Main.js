import React from "react";
import Home from "./Home";
import NewPatient from "./NewPatient";
import PatientRecords from "./PatientRecords";
import { Routes, Route } from "react-router-dom";

function Main (){
    return(
        <div className="Main">
            <Routes>
                <Route exact path="/patientrecords" element={<PatientRecords />}/>
            </Routes>
            <Routes>
                <Route exact path="/newpatient" element={<NewPatient />}/>
            </Routes>
            <Routes>
                <Route exact path="/home" element={<Home />}/>
            </Routes>

            
        </div>
        
    )
}

export default Main;