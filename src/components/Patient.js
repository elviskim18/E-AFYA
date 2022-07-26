import React from "react";

function Patient ({patient}){
    return (
        <ul>
            <li className="patient">{patient.name} <span>{patient.gender}</span></li>
            
        </ul>
            
        
    )
}

export default Patient;