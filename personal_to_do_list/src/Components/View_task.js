import React, { useEffect, useState } from "react";
import { } from 'react-router-dom';
import { Table } from 'react-bootstrap';


function View_tasks() {
    const [data, setdata] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [DOC, setDOC] = useState("");
    const [taskinfo, settaskinfo] = useState("");
    const [selectedTaskId, setSelectedTaskId] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/Task').then((result) => {
            result.json().then((res) => {
                setdata(res);
            })
        })
    }, [])

    useEffect(() => {
        Remove_data();
    }, [])


    function remove(id) {
        console.log(id);
        fetch(`http://localhost:3000/Task/${selectedTaskId}`, {
            method: "DELETE"
        }).then((result) => {
            result.json().then((res) => {
                console.log(res);
                Remove_data();
            })
        })
    }

    function Remove_data() {
        fetch("http://localhost:8000/User").then((result) => {
            result.json().then((res) => {
                setdata(res);
                setSelectedTaskId(res[0].selectedTaskId);
                setTaskName(res[0].taskName);
                setDOC(res[0].DOC);
                settaskinfo(res[0].taskinfo);
            })
        })

    }

    function Selectuser(id) {
        let val = data[id - 1]
        setSelectedTaskId(val.selectedTaskId);
        setTaskName(val.taskName);
        setDOC(val.DOC);
        settaskinfo(val.taskinfo);
    }


    function updatedata(){
        let all_data = {selectedTaskId, taskName, DOC, taskinfo};
        fetch(`http://localhost:8000/User/${selectedTaskId}`, {
            method: "PUT",
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(all_data)
        }).then((result) => {
            result.json().then((res) => {
                console.log(res);
                Remove_data();
            })
        })
    }

    return (
      <>
        <h1>View Component</h1>
        <form>
            <label htmlFor="taskname">Enter The Task</label>
            <input type="text" value={taskName}  id="taskname" onChange={(e)=>setTaskName(e.target.value)} /> <br /> <br />

            <label htmlFor="DOC">Enter The date Of Completion</label>
            <input type="Date" value={DOC}  onChange={(e)=>setDOC(e.target.value)} /> <br /> <br />

            <label htmlFor="info">Enter the any extra infomation about Task</label>
            <input type="text" value={taskinfo} onChange={(e)=>settaskinfo(e.target.value)}/> <br /> <br />
            <button onClick={updatedata}>Submit</button> <br />
        </form>

        <Table striped border={2}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>index</td>
                        <td>Task Name</td>
                        <td>Date Of Completion</td>
                        <td>Details Of Task</td>
                        <td>Update Task</td>
                        <td>Delete Task</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((items, index) => 
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{items.id}</td>
                                <td>{items.taskName}</td>
                                <td>{items.DOC}</td>
                                <td>{items.taskinfo}</td>
                                <td><button onClick={() => { Selectuser(items.id) }}>Update</button></td>
                                <td><button onClick={() => { remove(items.id) }}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
      </>
    )
}
export default View_tasks;