import React, { useState, useEffect } from "react";
import { } from 'react-router-dom';
import { FormControl, Stack, TextField, Button, Table, Typography } from "@mui/material";
import Data_Table from "./Data_Table";

function Imp_Data() {
    const [Personaldata, setPersonaldata] = useState([]);
    const [id, setid] = useState("");
    const [Personaldataname, setPersonaldataname] = useState(" ");
    const [Personaldatainfo, setPersonaldatainfo] = useState(" ");

    // first one 
    useEffect(() => {
        getPersonalDetails();
    }, [])

    const getPersonalDetails = () => {
        fetch("http://localhost:7000/data").then((result) => {
            result.json().then((new_result) => {
                setPersonaldata(new_result);
            })
        })
    }

    // Adding important personal data
    function AddPersonaldata(e) {
        // e.preventDefault();
        if (e) {
            e.preventDefault();
        }
        let link_data1 = { id, Personaldataname, Personaldatainfo };
        fetch("http://localhost:7000/data", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(link_data1)
        })
        alert("Data Added Successfully....");
        getPersonalDetails();
        setid("");
        setPersonaldataname("");
        setPersonaldatainfo("");
    }

    const deletePersonaldata = (id) => {
        fetch(`http://localhost:7000/data/${id}`, {    // here we need to priovide id of record.
            method: "DELETE"
        }).then((result) => {
            result.json().then((new_result) => {
                alert("Data Deleted Successfully....")
                getPersonalDetails();     // calling getUserDetails function again,and we updated the states in getUserDetails() so page will re-reder again.
            })
        })
    }



    return (
        <>
            <div>
                <Typography variant="h3" marginTop={4} >Manage Your Personal Data</Typography>
                <FormControl  sx={{width: "35%", border:"1px solid Gray", padding: "15px", marginTop:"15px"}}>
                    <form>
                        <Stack spacing={2} maxWidth={400} margin="auto" sx={{marginTop: "2%"}}>

                            <TextField
                                type="number"
                                id="PersonalId"
                                label="Personal Id"
                                variant="filled"
                                value={id}
                                onChange={(e) => setid(e.target.value)}
                            />

                            <TextField
                                type="text"
                                id="Personaldataname"
                                label="Data Name"
                                variant="filled"
                                value={Personaldataname}
                                onChange={(e) => setPersonaldataname(e.target.value)}
                            />

                            <TextField
                                type="text"
                                id="Personaldatainfo"
                                label="Data Info"
                                variant="filled"
                                value={Personaldatainfo}
                                onChange={(e) => setPersonaldatainfo(e.target.value)}
                            />

                            {/* <button onClick={AddPersonaldata} >Add link</button> */}
                            <Button onClick={()=>AddPersonaldata()} variant="contained" color="primary">Add Data</Button>
                        </Stack>
                    </form>
                </FormControl>
            </div>
                
                <Data_Table data={Personaldata} deletePersonaldata={deletePersonaldata}></Data_Table>

        </>
    )
}

export default Imp_Data;