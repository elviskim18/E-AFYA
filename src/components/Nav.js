import React from "react";
import {NavLink } from "react-router-dom";
import { FaUserCircle, FaHandHoldingMedical} from "react-icons/fa";



function Nav (){
    return (
      <div className="Nav">
        <h1>
          E-AFYA
          <span>
            <FaHandHoldingMedical />
          </span>
        </h1>
        <div className="profile">
          <h3><span><FaUserCircle /></span>Paul kimani</h3>
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