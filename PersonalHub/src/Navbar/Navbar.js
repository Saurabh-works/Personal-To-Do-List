import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import View_task from "../Components/View_task";
import Important_Sessions from "../Components/Important_Sessions";
import Add_task from "../Components/Add_task";
import Login from "./Login";
import Navbar_links from "./Navbar_links";
import Imp_Link from "../Components/Imp_Link";
import Imp_Data from "../Components/Imp_Data";


function Navbar() {
    return(
        <>
            <BrowserRouter>
            <Navbar_links></Navbar_links>
            <Routes>
                <Route path='/' element={<Login></Login>}></Route>
                <Route path='/add' element={<Add_task></Add_task>}></Route>
                <Route path='/view' element={<View_task></View_task>}></Route>

                {/* nested router */}
                <Route path='/Imp' element={<Important_Sessions></Important_Sessions>}>
                    <Route path="link" element={<Imp_Link></Imp_Link>} ></Route>
                    <Route path="data" element={<Imp_Data></Imp_Data>} ></Route>
                </Route>
            </Routes>
           </BrowserRouter>
        </>
    )
}
export default Navbar;