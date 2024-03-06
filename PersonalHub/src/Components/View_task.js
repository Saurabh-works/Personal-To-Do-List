import React, { useEffect, useState } from "react";
import { } from 'react-router-dom';
import { FormControl, TextField, Table, Button, Stack, Typography } from "@mui/material";
import Task_Table from "./Task_Table";


function View_tasks() {
    const [data, setdata] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [DOC, setDOC] = useState("");
    const [taskinfo, settaskinfo] = useState("");
    const [id, setid] = useState(null);

    useEffect(() => {
        getUserDetails();
    }, [])



    const getUserDetails = () => {
        fetch("http://localhost:7000/Task").then((result) => {
            result.json().then((new_result) => {
                setdata(new_result);
            })
        })
    }


    const deleteUser = (id) => {
        fetch(`http://localhost:7000/Task/${id}`, {    // here we need to priovide id of record.
            method: "DELETE"
        }).then((result) => {
            result.json().then((new_result) => {
                // console.log(new_result);    // printing new result.
                alert("Task Deleted Successfully....")
                getUserDetails();     // calling getUserDetails function again,and we updated the states in getUserDetails() so page will re-reder again.
            })
        })
    }


    const selectUser = (item) => {
        setid(item.id);
        setTaskName(item.taskName);
        setDOC(item.DOC);
        settaskinfo(item.taskinfo);
    }

    // Update data with PUT method :
    const updateUser = () => {
        let item = { id, taskName, DOC, taskinfo };  // taking value in object
        fetch(`http://localhost:7000/Task/${id}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((new_result) => {
                // console.log(new_result);
                alert("Task Updated Successfully....")
                getUserDetails(); // calling getUserDetails function again,and we updated the states in getUserDetails() so page will re-reder again.
            })
        })
    }

    return (
        <>
            <Typography variant="h3" marginTop={4} >Manage Your Tasks</Typography>
            <FormControl sx={{width: "35%", border:"1px solid Gray", padding: "15px", marginTop:"15px"}}>
                
                <form>
                <Stack spacing={2} maxWidth={400} margin="auto" sx={{marginTop: "2%"}}>
                    <TextField 
                    type="text" 
                    value={id} 
                    id="Id" 
                    label="Task Id"
                    variant="filled"
                    onChange={(e) => setid(e.target.value)} 
                    /> 

                    <TextField 
                    type="text" 
                    value={taskName} 
                    id="taskname" 
                    label="Update The Task" 
                    variant="filled"
                    onChange={(e) => setTaskName(e.target.value)} 
                    /> 

                    <TextField 
                    type="Date" 
                    value={DOC} 
                    helperText="date Of Completion"
                    variant="filled"
                    onChange={(e) => setDOC(e.target.value)} 
                    /> 

            
                    <TextField 
                    type="text" 
                    value={taskinfo}
                    label="Enter task Info" 
                    variant="filled"
                    onChange={(e) => settaskinfo(e.target.value)} 
                    /> 
                    <Button onClick={()=>updateUser()} variant="contained" color="primary">Submit</Button> 
                    {/* <button onClick={updateUser} >Submit</button>  */}

                    </Stack>
                </form>
                
            </FormControl>

            
            <Task_Table data={data} selectUser={selectUser} deleteUser={deleteUser}></Task_Table>
        </>
    )
}
export default View_tasks;