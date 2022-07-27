import React,{useState} from "react";
import Patient from "./Patient";



function PatientRecords ({patients,getSearch,filterPatients}){
    const [seachvalue , setsearchvalue] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all");

    function handleSearch(e){
        e.preventDefault();
        setsearchvalue(e.target.value)
        const seachdata = e.target.value
        getSearch(seachdata)
      }

      //filter
      function handleCategoryChange(event) {
          console.log("ni mimi:",event.target.value)
          setSelectedCategory(event.target.value);
          const selekta = event.target.value
          console.log(selekta)
          filterPatients(selekta)
      }

    return (
        <div>
            <h1 className="header">PATIENT RECORDS</h1>
            <div className="seafil">

                <input type="text" placeholder= "Search" value={seachvalue} onChange={handleSearch}/>

                <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="all">ALL</option>
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