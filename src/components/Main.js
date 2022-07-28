import React, {useState, useEffect} from "react";
import Home from "./Home";
import NewPatient from "./NewPatient";
import PatientRecords from "./PatientRecords";
import { Routes, Route } from "react-router-dom";
import axios from "axios";



function Main (){
    const [patients ,setpatients] = useState([]);
    const url = "http://localhost:8004/patients"


    //get patients 
    function getPatients (){
        axios.get(url).then((resp) => {
          const pat = resp.data
          setpatients(pat)
        })
      
     }

     //add new patient
     function addNewpatient (newuser){

        axios.post(url,newuser)
        setpatients([
            ...patients,newuser
        ])


     }

     //search function
     function getSearch (str){
         if(str === ""){
            getPatients()
          }else{
              const newvalue = patients.filter((pat) =>  pat.name.toLowerCase().includes(str.toLowerCase()))
              setpatients(newvalue)
              
          }
         
      }

    //filter function
    function filterPatients (str){
        getPatients()
        const newItems = patients.filter((pat)=> {
            if(str === "all") {
                return true
            }else {
                return pat.gender === str
            }
        })
        
        console.log("beferesetting me",newItems)
        setpatients((newItems)=>newItems)
        console.log("aftersetting:",newItems)
        
        
    }
    

    //useEffect
    useEffect(() =>{
        getPatients()

    },[])



    return(
        <div className="Main">
            <Routes>
                <Route  path="/patientrecords" element={<PatientRecords patients={patients} getSearch={getSearch} filterPatients={filterPatients} />}/>
            
            
                <Route  path="/newpatient" element={<NewPatient  addNewpatient={addNewpatient}/>}/>
            
            
                <Route  path="/" element={<Home />}/>
            </Routes>
        </div>
        
    )
}

export default Main;