import React, { useState } from "react";
import { } from 'react-router-dom';
import { TextField, Stack, Button, FormControl, Typography } from '@mui/material'



function Add_task() {
    const [taskName, setTaskName] = useState('');
    const [DOC, setDOC] = useState("");
    const [taskinfo, settaskinfo] = useState("");
    const [id, setid] = useState(null);


    function AddUser(e) {
        e.preventDefault();
        let user_data = { id, taskName, DOC, taskinfo };
        // console.log(id, name, Sirname, mobile);
        fetch("http://localhost:7000/Task", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(user_data)
        })
        alert("Task Added Successfully....");
        setid("");
        setTaskName("");
        setDOC("");
        settaskinfo("");
        console.log(id, taskName, DOC, taskinfo);
    }

    return (
        <>
            
            <Typography variant="h3" marginTop={4} >Add Your Tasks</Typography>
            <FormControl sx={{width: "35%", border:"1px solid Gray", padding: "15px", marginTop:"15px"}} >
            <form onSubmit={AddUser}>
                <Stack spacing={2} maxWidth={400} margin="auto" sx={{marginTop: "2%"}}>
                    <TextField
                        type="number"
                        id="Id"
                        label="Enter Id"  sx={{ marginRight: "10px" }}
                        value={id}
                        variant="filled"
                        onChange={(e) => setid(e.target.value)}
                        required
                    />

                    <TextField
                        type="text"
                        id="taskname"
                        value={taskName}
                        variant="filled"
                        onChange={(e) => setTaskName(e.target.value)}
                        label="Enter task name"
                        required
                    />

                    <TextField
                        type="date"
                        id="DOC"
                        value={DOC}
                        variant="filled"
                        onChange={(e) => setDOC(e.target.value)}
                        required
                        helperText="Enter Date Of Completion"
                    />

                    <TextField
                        type="text"
                        id="info"
                        value={taskinfo}
                        variant="filled"
                        onChange={(e) => settaskinfo(e.target.value)}
                        label="Enter task Info"
                        required
                        
                    />

                    {/* <button type="submit">Add Task</button> */}
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Stack>
            </form>
            </FormControl>
        </>
    )
}
export default Add_task;