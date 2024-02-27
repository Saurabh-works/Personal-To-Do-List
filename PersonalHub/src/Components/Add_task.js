import React, { useState } from "react";
import { } from 'react-router-dom';


function Add_task() {
    const [taskName, setTaskName] = useState('');
    const [DOC, setDOC] = useState("");
    const [taskinfo, settaskinfo] = useState("");
    const [id, setid] = useState(null);


    function AddUser(e){
        e.preventDefault();
        let user_data = {id, taskName, DOC, taskinfo };
        // console.log(id, name, Sirname, mobile);
        fetch("http://localhost:3000/Task",{
            method: "POST",
            headers:{
                "Accept":"application/json",
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
            <h1>Add_task Page</h1>
            <form onSubmit={AddUser}>
            <label htmlFor="Id">Task Id</label>
                <input
                    type="number"
                    id="Id"
                    value={id}
                    onChange={(e) => setid(e.target.value)}
                    // placeholder="Enter task name"
                    required
                />
                <label htmlFor="taskname">Enter The Task</label>
                <input
                    type="text"
                    id="taskname"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="Enter task name"
                    required
                />

                <label htmlFor="DOC">Enter The date Of Completion</label>
                <input
                    type="date"
                    id="DOC"
                    value={DOC}
                    onChange={(e) => setDOC(e.target.value)}
                    required
                />

                <label htmlFor="info">Enter the any extra infomation about Task</label>
                <input
                    type="text"
                    id="info"
                    value={taskinfo}
                    onChange={(e) => settaskinfo(e.target.value)}
                    placeholder="Enter task Info"
                    required
                />

 
                <button type="submit">Add Task</button>
            </form>
        </>
    )
}
export default Add_task;