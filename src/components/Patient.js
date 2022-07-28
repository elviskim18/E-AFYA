import React, {useState} from "react";

function Patient ({patient,setdata}){
    

    
    return (
        <ul>
            <li onClick={()=> setdata(patient)} className="patient">{patient.name} <span>{patient.gender}</span></li>
            
        </ul>
            
        
    )
}

export default Patient;