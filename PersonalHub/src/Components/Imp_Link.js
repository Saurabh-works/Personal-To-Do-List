import React, { useState, useEffect } from "react";
import { } from 'react-router-dom';
import { FormControl, Stack, Table, TextField, Button, Typography } from "@mui/material";
import Link_Table from "./Link_Table";


function Imp_Link() {
    const [linkdata, setlinkdata] = useState([]);
    const [id, setId] = useState("");
    const [linkname, setlinkname] = useState("");
    const [linkURL, setlinkURL] = useState("");

    // first one 
    useEffect(() => {
        getLinkDetails();
    }, [])

    const getLinkDetails = () => {
        fetch("http://localhost:7000/Links").then((result) => {
            result.json().then((new_result) => {
                setlinkdata(new_result);
            })
        })
    }

    // Adding link and deleting link session
    function Addlink(e) {
        // e.preventDefault();
        if (e) {
            e.preventDefault();
        }
        let link_data = { id, linkname, linkURL };
        fetch("http://localhost:7000/Links", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(link_data)
        })
        alert("Link Added Successfully....");
        getLinkDetails();
        setId("");
        setlinkname("");
        setlinkURL("");
    }

    const deleteLink = (id) => {
        fetch(`http://localhost:7000/Links/${id}`, {    // here we need to priovide id of record.
            method: "DELETE"
        }).then((result) => {
            result.json().then((new_result) => {
                alert("Link Deleted Successfully....")
                getLinkDetails();     // calling getUserDetails function again,and we updated the states in getUserDetails() so page will re-reder again.
            })
        })
    }

    return (
        <>
            <div>
                <Typography variant="h3" marginTop={4} >Manage Your Links</Typography>
                <FormControl sx={{width: "35%", border:"1px solid Gray", padding: "15px", marginTop:"15px"}}>
                    <form>
                        <Stack spacing={2} maxWidth={400} margin="auto" sx={{marginTop: "2%"}}>
                            <TextField
                                type="number"
                                label="Link Id"
                                variant="filled"
                                id="IdLink"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            />


                            <TextField
                                type="text"
                                id="linkname"
                                label="Link Name"
                                variant="filled"
                                value={linkname}
                                onChange={(e) => setlinkname(e.target.value)}
                            />

                            <TextField
                                type="text"
                                id="linkURL"
                                label="Link URL"
                                variant="filled"
                                value={linkURL}
                                onChange={(e) => setlinkURL(e.target.value)}
                            />
                            <Button onClick={() => Addlink()} variant="contained" color="primary">Add link</Button>
                        </Stack>
                    </form>
                </FormControl>
                
                <br/> <br/>

                <Link_Table data={linkdata} deleteLink={deleteLink} ></Link_Table>

            </div>
        </>
    )
}

export default Imp_Link;