import React, {useState, useEffect} from "react";
import Home from "./Home";
import NewPatient from "./NewPatient";
import PatientRecords from "./PatientRecords";
import { Routes, Route } from "react-router-dom";
import axios from "axios";


function Main (){
    const [patients ,setpatients] = useState([]);
    const url = "http://localhost:8000/patients"


    //get patients 
    function getPatients (){
        axios.get(url).then((resp) => {
          const pat = resp.data
          console.log(pat)
          setpatients(pat)
        })
      }
    
    //useEffect
    useEffect(() =>{
        getPatients()

    },[])



    return(
        <div className="Main">
            <Routes>
                <Route exact path="/patientrecords" element={<PatientRecords patients={patients}/>}/>
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