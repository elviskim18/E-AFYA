import React from "react";

function Patient ({patient,setdata,setvisibility ,visibility, deletePatient}){
    
    function handle (){
        setvisibility((visibility) => !visibility)
        setdata(patient)
        console.log(patient)
        
    }

    
    return (
        <ul>
            <li onClick={handle} className="patient">{patient.name} <span>{patient.gender.toUpperCase()}</span> </li>
            
        </ul>
            
        
    )
}

export default Patient;