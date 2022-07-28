import React, {useState} from "react";

function Patient ({patient,setdata,setvisibility ,visibility}){
    
    function handle (){
        setvisibility((visibility) => !visibility)
        setdata(patient)
        console.log(patient)
        
    }

    
    return (
        <ul>
            <li onClick={handle} className="patient">{patient.name} <span>{patient.gender.toUpperCase()}</span> <button>DELETE</button></li>
            
        </ul>
            
        
    )
}

export default Patient;