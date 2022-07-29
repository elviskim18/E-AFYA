import React from "react";
import {NavLink } from "react-router-dom";
import { FaHandHoldingMedical} from "react-icons/fa";




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
          <h3><span><img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="profileimage"/></span>Rohan Patel</h3>
          
        </div>
        <div className="Navlinks">
          <NavLink to="/"  className="linkstyles">
            Home
          </NavLink>

          <NavLink to="newpatient"  className="linkstyles">
            Add New Patient
          </NavLink>

          <NavLink to="patientrecords"  className="linkstyles">
            Patient Records
          </NavLink>
        </div>
      </div>
    );
}
export default Nav