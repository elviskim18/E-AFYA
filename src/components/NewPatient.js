import React from "react";
import { FaUserPlus} from "react-icons/fa"


function NewPatient (){
    return (
        <div className="newPatient">
            <h1 className="header">NEW PATIENT</h1>
            <div className="formPatient">
                <h2><span><FaUserPlus/></span>  ADD NEW PATIENT</h2>
                <form >
                    <div className="formelements">
                        <div className="element">
                            <label for="name">First Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name.."/>
                        </div>

                        <div className="element">
                            <label for="gender">Gender</label>
                            <select id="gender" name="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div className="element">
                            <label for="contact">Contacts</label>
                            <input type="text" name="contact" placeholder="Phone number"/>
                        </div>

                        <div className="element">
                            <label for="birthday">Date Of Birth</label>
                            <input type="date" name="birthday"/>
                        </div>

                        <div className="element">
                            <label for="weight">WEIGHT</label>
                            <input type="number" name="weight"/>
                        </div>

                        <div className="element">
                            <label for="blood">BLOOD GROUP</label>
                            <select id="blood" name="blood">
                                <option value="a">A</option>
                                <option value="b">B</option>
                                <option value="ab">AB</option>
                                <option value="o">O</option>
                            </select>
                        </div>

                        <div className="element">
                            <label for="symptoms">SYMPTOMS</label>
                            <input type="text" name="symptoms" />
                        </div>

                        <div className="element">
                            <label for="diagnosis">DIAGNOSIS</label>
                            <input type="text" name="diagnosis" />
                        </div>
                        
                    </div>
                    <input className = "button" type="submit" value="SAVE" />
                    
                </form>
           

            </div>
        </div>
        
    )
}

export default NewPatient;