import React,{useState} from "react";
import Patient from "./Patient";
import { useNavigate } from "react-router-dom";





function PatientRecords ({patients,getSearch,filterPatients, updatePatient, deletePatient}){
    let navigate = useNavigate()
    const [seachvalue , setsearchvalue] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [view ,setview] = useState(false)

    const [data, setdata] = useState({});
    const [visibility ,setvisibility] = useState(true)
    
    
    
    //search in
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

      function handleEdit (e){
          e.preventDefault()
          console.log(data)
          updatePatient(data.id,data)
      }

      function handleChange(event){
        const key = event.target.name;
        const value = event.target.value;
        setdata({...data, [key]:value})
    
      }
      //handle delete
      function handleDelete (){
        deletePatient(data.id)
        navigate("/")

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
                <div className="short">

                    {patients.map((patient)=>{
                        return <Patient  key={patient.id} patient={patient} setdata={setdata} deletePatient={deletePatient} setvisibility={setvisibility} visibility={visibility}/>
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
                    <button onClick={() => setview((view) => !view)}>UPDATE</button>
                    <button onClick={handleDelete}>DELETE</button>
                    
                    <form style={view? {display:"block"} : {display: "none"}} onSubmit={handleEdit}>
                        <div className="styleform">
    
                            <label>NAME
                            <input value={data.name} type="text" name="name" onChange={handleChange}/>
                            </label>
                            <label>GENDER
                            <input value={data.gender} type="text" name="gender" onChange={handleChange}/>
                            </label>
                            <label>CONTACT
                                <input value={data.number} type="text" name="number" onChange={handleChange}/>
                            </label>
                            <label>DOB
                                <input value={data.dob} type="date" name="dob" onChange={handleChange}/>
                            </label>
                            <label>WEIGHT
                                <input value={data.weight} type="text" name="weight" onChange={handleChange} />
                            </label>
                            <label>BLOODGROUP
                                <input value={data.bloodgroup} type="text" name="bloodgroup" onChange={handleChange}/>
                            </label>
                            <label>SYMPTOMS
                                <input value={data.symptoms} type="text" name="symptoms" onChange={handleChange}/>
                            </label>
                            <label>DIAGNOSIS
                                <input value={data.diagnosis} type="text" name="diagnosis" onChange={handleChange}/>
                            </label>
                            
                            <button >EDIT</button>

                        </div>
                        
                    </form> 

                    
                </div>
                 
            </div>

        </div>
        
    )
}

export default PatientRecords;