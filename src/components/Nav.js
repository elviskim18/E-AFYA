import React from "react";
import {NavLink } from "react-router-dom";
import { FaHospitalAlt,FaUserCircle} from "react-icons/fa";



function Nav (){
    return (
      <div className="Nav">
        <h1>
          E-AFYA
          <span>
            <FaHospitalAlt />
          </span>
        </h1>
        <div className="profile">
          <h2>
            Paul Kimani
            <span>
              <FaUserCircle />
            </span>
          </h2>
        </div>
        <div className="Navlinks">
          <NavLink to="home" exact className="linkstyles">
            Home
          </NavLink>

          <NavLink to="newpatient" exact className="linkstyles">
            Add New Patient
          </NavLink>

          <NavLink to="patientrecords" exact className="linkstyles">
            Patient Records
          </NavLink>
        </div>
      </div>
    );
}
export default Nav