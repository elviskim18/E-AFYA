import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { FaUserPlus} from "react-icons/fa"


function NewPatient ({addNewpatient}){
    const [formdata ,setformdata] = useState({
        name: "",
        gender: "",
        number: "" ,
        dob: "",
        weight: "",
        bloodgroup: "",
        symptoms: "",
        diagnosis:""
    });
    let navigate = useNavigate();

   //handlechange
    function handleChange (event){
        const name = event.target.name;
        let value = event.target.value;
        setformdata({
            ...formdata,
            [name]:value
        })
    }

    //handle submit
    function handleSubmit(event){
        event.preventDefault();
        addNewpatient(formdata)
        alert("User added Successfully")
        navigate("/patientrecords")
        
        console.log(formdata)


    }



    return (
        <div className="newPatient">
            <h1 className="header">NEW PATIENT</h1>
            <div className="formPatient">
                <h2><span><FaUserPlus/></span>  ADD NEW PATIENT</h2>
                <form onSubmit={handleSubmit}>
                    <div className="formelements">
                        <div className="element">
                            <label >First Name
                            <input type="text" id="name" name="name" value={formdata.name} placeholder="Your name.." onChange={handleChange}/>
                            </label>
                        </div>

                        <div className="element">
                            <label >Gender
                            <select id="gender" name="gender" value={formdata.gender} onChange={handleChange}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            </label>
                        </div>

                        <div className="element">
                            <label>Contacts
                            <input type="text" name="number" value={formdata.number}  placeholder="Phone number" onChange={handleChange}/>
                            </label>
                        </div>

                        <div className="element">
                            <label htmlFor="birthday">Date Of Birth</label>
                            <input type="date" value={formdata.dob} name="dob" onChange={handleChange} />
                        </div>

                        <div className="element">
                            <label htmlFor="weight">WEIGHT</label>
                            <input type="number" name="weight" value={formdata.weight} onChange={handleChange} />
                        </div>

                        <div className="element">
                            <label htmlFor="bloodgroup">BLOOD GROUP</label>
                            <select id="blood" name="bloodgroup" value={formdata.bloodgroup} onChange={handleChange} >
                                <option value="a">A</option>
                                <option value="b">B</option>
                                <option value="ab">AB</option>
                                <option value="o">O</option>
                            </select>
                        </div>

                        <div className="element">
                            <label htmlFor="symptoms">SYMPTOMS</label>
                            <input type="text" name="symptoms" value={formdata.symptoms} onChange={handleChange} />
                        </div>

                        <div className="element">
                            <label htmlFor="diagnosis">DIAGNOSIS</label>
                            <input type="text" name="diagnosis" value={formdata.diagnosis}onChange={handleChange} />
                        </div>
                        
                    </div>
                    <input className = "button" type="submit" value="SAVE" />
                    
                </form>
           

            </div>
        </div>
        
    )
}

export default NewPatient;