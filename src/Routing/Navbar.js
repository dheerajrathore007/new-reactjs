import React from "react";
import {Link} from 'react-router-dom'
const Navbar =()=>{
    return(
        <>
        <div className="navbar">
        <Link to="/"   className="homebtn">Home</Link> 
        <Link to="/About"   className="aboutbtn">About</Link>
        <Link to="/Contact"   className="contactbtn">Contact</Link>
        <Link to="/Profile"  className="profilebtn">Profile</Link>
        </div>
        </>
    )
}
export default Navbar