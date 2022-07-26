import React from "react";
import Patient from "./Patient";



function PatientRecords ({patients}){
    return (
        <div>
            <h1 className="header">PATIENT RECORDS</h1>
            <div className="seafil">
                <input type="text" placeholder= "Search" value="" />
                <select name="filter" >
                    <option value="male">MALE</option>
                    <option value="female">FEMALE</option>
                </select>
            </div>
            <div className="pRecords">
                {patients.map((patient)=>{
                    return <Patient  key={patient.id}patient={patient}/>
                })}
                 
            </div>

        </div>
        
    )
}

export default PatientRecords;