import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


function Navbar_links(){
    return(
        <>
            <ul className="navbar">
                <li><NavLink className="nav-bar-link" to="/add">Home</NavLink></li>
                <li><NavLink className="nav-bar-link" to="/view">View Tasks</NavLink></li>
                <li><NavLink className="nav-bar-link" to="/Imp">Important Task</NavLink></li>
                <li><NavLink className="nav-bar-link" to="/login">Login</NavLink></li>
            </ul>
        </>
    )
}
export default Navbar_links;