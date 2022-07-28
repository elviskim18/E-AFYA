import React, {useState} from "react";

function Patient ({patient,setdata,setvisibility ,visibility}){
    
    function handle (){
        setvisibility((visibility) => !visibility)
        setdata(patient)
        


    }

    
    return (
        <ul>
            <li onClick={handle} className="patient">{patient.name} <span>{patient.gender}</span></li>
            
        </ul>
            
        
    )
}

export default Patient;