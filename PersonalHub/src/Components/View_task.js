import React, { useEffect, useState } from "react";
import { } from 'react-router-dom';
import { Table } from 'react-bootstrap';


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
        fetch("http://localhost:3000/Task").then((result) => {
            result.json().then((new_result) => {
                setdata(new_result);
            })
        })
    }


    const deleteUser = (id) => {
        fetch(`http://localhost:3000/Task/${id}`, {    // here we need to priovide id of record.
            method: "DELETE"
        }).then((result) => {
            result.json().then((new_result) => {
                // console.log(new_result);    // printing new result.
                alert("Task Deleted Successfully....")
                getUserDetails();     // calling getUserDetails function again,and we updated the states in getUserDetails() so page will re-reder again.
            })
        })
    }


    function selectUser(id) {
        let val = data[id - 1]
        setid(val.id);
        setTaskName(val.taskName);
        setDOC(val.DOC);
        settaskinfo(val.taskinfo);
    }

    // Update data with PUT method :
    const updateUser = () => {
        let item = { id, taskName, DOC, taskinfo };  // taking value in object
        fetch(`http://localhost:3000/Task/${id}`, {
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
            <h1>View Component</h1>
            <form>
                <label htmlFor="Id">Task Id</label>
                <input type="text" value={id} id="Id" onChange={(e) => setid(e.target.value)} /> <br /> <br />


                <label htmlFor="taskname">Enter The Task</label>
                <input type="text" value={taskName} id="taskname" onChange={(e) => setTaskName(e.target.value)} /> <br /> <br />

                <label htmlFor="DOC">Enter The date Of Completion</label>
                <input type="Date" value={DOC} onChange={(e) => setDOC(e.target.value)} /> <br /> <br />

                <label htmlFor="info">Enter the any extra infomation about Task</label>
                <input type="text" value={taskinfo} onChange={(e) => settaskinfo(e.target.value)} /> <br /> <br />
                <button onClick={updateUser}>Submit</button> <br />
            </form>

            <Table striped border={2}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Task Name</th>
                        <th>Date Of Completion</th>
                        <th>Details Of Task</th>
                        <th>Update Task</th>
                        <th>Delete Task</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((items, index) =>
                            <tr key={index}>
                                <td>{items.id}</td>
                                <td>{items.taskName}</td>
                                <td>{items.DOC}</td>
                                <td>{items.taskinfo}</td>
                                <td><button onClick={() => { selectUser(items.id) }}>Edit</button></td>
                                <td><button onClick={() => { deleteUser(items.id) }}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}
export default View_tasks;