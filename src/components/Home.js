import React from "react";
import { FaRegCalendarAlt , FaProcedures, FaUserMd} from "react-icons/fa";

function Home({patients}){
    const total = Object.keys(patients).length //total number of patients 
    
    
    return(
        <div className="home">
            <h1 className="header">HOME</h1>
            <div className="dashboard">
                <h2>DASHBOARD</h2>
                <div className="dcontainer">
                    <div className="child">
                        <p><span><FaRegCalendarAlt /></span>    TOTAL  PATIENTS: {total}</p>
                        
                    </div>
                    <div className="child">
                        <p><span><FaUserMd/></span>    NURSES: 13</p>
                        
                    </div>
                    <div className="child">
                        <p><span><FaProcedures /></span>     BEDS: 17</p>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Home;