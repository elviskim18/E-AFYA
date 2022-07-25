import React from "react";
import {NavLink } from "react-router-dom";
import { FaHospitalAlt,FaUserCircle} from "react-icons/fa";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

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
          <NavLink to="home" exact style={linkStyles}>
            Home
          </NavLink>

          <NavLink to="newpatient" exact style={linkStyles}>
            Add New Patient
          </NavLink>
          
          <NavLink to="patientrecords" exact style={linkStyles}>
            Patient Records
          </NavLink>
        </div>
      </div>
    );
}
export default Nav