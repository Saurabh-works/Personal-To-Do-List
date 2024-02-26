import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import View_task from "../Components/View_task";
import Important_Sessions from "../Components/Important_Sessions";
import Add_task from "../Components/Add_task";
import Login from "./Login";
import Navbar_links from "./Navbar_links";


function Navbar() {
    return(
        <>
            <BrowserRouter>
            <Navbar_links></Navbar_links>
            <Routes>
                {/* <Route path='/add' element={<Login Component={Add_task}></Login>}></Route> */}
                <Route path='/add' element={<Add_task></Add_task>}></Route>
                <Route path='/view' element={<View_task></View_task>}></Route>
                <Route path='/Imp' element={<Important_Sessions></Important_Sessions>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
            </Routes>
           </BrowserRouter>
        </>
    )
}
export default Navbar;