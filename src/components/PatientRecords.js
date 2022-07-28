import React,{useState} from "react";
import Patient from "./Patient";



function PatientRecords ({patients,getSearch,filterPatients}){
    const [seachvalue , setsearchvalue] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [data, setdata] = useState({});
    const [visibility ,setvisibility] = useState(true)
    const [view ,setview] = useState(false)
    

    function handleSearch(e){
        e.preventDefault();
        setsearchvalue(e.target.value)
        const seachdata = e.target.value
        getSearch(seachdata)
      }

      //filter
      function handleCategoryChange(event) {
          event.preventDefault()
        //   console.log("target:",event.target.value)

          setSelectedCategory(event.target.value);
          const selekta = event.target.value
          filterPatients(selekta)
      }
      //form view
      function handleview(){
          setview((view) => !view)
      }

    return (
        <div>
            <h1 className="header">PATIENT RECORDS</h1>
            <div className="seafil">

                <input type="text" placeholder= "Search" value={seachvalue} onChange={handleSearch}/>

                <select name="filter"  onChange={handleCategoryChange}>
                    <option value="all">ALL</option>
                    <option value="male">MALE</option>
                    <option value="female">FEMALE</option>
                </select>

            </div>
            <div className="pRecords">
                <div className="short">

                    {patients.map((patient)=>{
                        return <Patient  key={patient.id}patient={patient} setdata={setdata} setvisibility={setvisibility} visibility={visibility}/>
                    })}
                </div>
                
                <div className="displayPat" style={visibility? {display:"none"} : {display:"block"}}>
                    <h3>{data.name}</h3>
                    <p>GENDER:  {data.gender}</p>
                    <p>DATE OF BIRTH: {data.dob}</p>
                    <p>WEIGHT: {data.weight}</p>
                    <p>BLOODGROUP : {data.bloodgroup}</p>
                    <p>SYMPTOMS: {data.symptoms}</p>
                    <p>DIAGNOSIS: {data.diagnosis}</p>
                    <button onClick={handleview}>UPDATE</button>
                    
                    <form style={view? {display:"block"} : {display: "none"}}>
                        <input value={data.name} type="text" name=""/>
                        <input value={data.gender} type="text" name=""/>
                        <input value={data.number} type="text" name=""/>
                        <input value={data.dob} type="date" name=""/>
                        <button>edit</button>
                    </form> 

                    
                </div>
                 
            </div>

        </div>
        
    )
}

export default PatientRecords;