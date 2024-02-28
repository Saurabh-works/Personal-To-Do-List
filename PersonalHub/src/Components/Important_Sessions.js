import React, {useState, useEffect} from "react";
import { } from 'react-router-dom';
import { Table } from 'react-bootstrap';



function Important_Sessions() {
    const [linkdata, setlinkdata] = useState([]);
    const [linkId, setlinkID] = useState("");
    const [linkname, setlinkname] = useState("");
    const [linkURL, setlinkURL] = useState("");

    
    const [Personaldata, setPersonaldata] = useState([]);
    const [PersonaldataId, setPersonaldataId] = useState(" ");
    const [Personaldataname, setPersonaldataname] = useState(" ");
    const [Personaldatainfo, setPersonaldatainfo] = useState(" ");


    // first one 
    useEffect(() => {
        getLinkDetails();
        getPersonalDetails();
    }, [])



    const getLinkDetails = () => {
        fetch("http://localhost:8000/Links").then((result) => {
            result.json().then((new_result) => {
                setlinkdata(new_result);
            })
        })
    }

    const getPersonalDetails = () => {
        fetch("http://localhost:9000/data").then((result) => {
            result.json().then((new_result) => {
                setPersonaldata(new_result);
            })
        })
    }


    // Adding link and deleting link session
    function Addlink(e){
        e.preventDefault();
        let link_data = {linkId, linkname, linkURL};
        fetch("http://localhost:8000/Links",{
            method: "POST",
            headers:{
                "Accept":"application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(link_data)
        })
        alert("Link Added Successfully....");
        getLinkDetails();
        setlinkID("");
        setlinkname("");
        setlinkURL("");
    }

    const deleteLink = (id) => {
        fetch(`http://localhost:8000/Links/${id}`, {    // here we need to priovide id of record.
            method: "DELETE"
        }).then((result) => {
            result.json().then((new_result) => {
                alert("Link Deleted Successfully....")
                getLinkDetails();     // calling getUserDetails function again,and we updated the states in getUserDetails() so page will re-reder again.
            })
        })
    }

    // Adding important personal data
    function AddPersonaldata(e){
        e.preventDefault();
        let link_data1 = {PersonaldataId, Personaldataname, Personaldatainfo};
        fetch("http://localhost:9000/data",{
            method: "POST",
            headers:{
                "Accept":"application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(link_data1)
        })
        alert("Link Added Successfully....");
        getPersonalDetails();
        setPersonaldataId("");
        setPersonaldataname("");
        setPersonaldatainfo("");
    }

    const deletePersonaldata = (id) => {
        fetch(`http://localhost:9000/data/${id}`, {    // here we need to priovide id of record.
            method: "DELETE"
        }).then((result) => {
            result.json().then((new_result) => {
                alert("Link Deleted Successfully....")
                getPersonalDetails();     // calling getUserDetails function again,and we updated the states in getUserDetails() so page will re-reder again.
            })
        })
    }


    return (
        <>
            <h1>Important_Sessions Page</h1>
            <div>
                <h1>Important links</h1>
                <form>
                    <label htmlFor="IdLink" >id</label>
                    <input type="number" id="IdLink" value={linkId} onChange={(e) => setlinkID(e.target.value)}/>
                    <label htmlFor="linkname">Enter the Link name:</label>
                    <input type="text" id="linkname" value={linkname} onChange={(e) => setlinkname(e.target.value)}/>
                    <label htmlFor="linkURL">Enter the Link URL:</label>
                    <input type="text" id="linkURL" value={linkURL} onChange={(e) => setlinkURL(e.target.value)}/>
                    <button onClick={Addlink}>Add link</button>
                </form>
                <Table striped border={2}>
                    <thead>
                        <tr key="">
                            <td>Id</td>
                            <td>Link Name</td>
                            <td>Link URL</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            linkdata.map((emailItem, index) =>
                                <tr key="index">
                                    <td>{emailItem.linkId}</td>
                                    <td>{emailItem.linkname}</td>
                                    <td>{emailItem.linkURL}</td>
                                    <td><button onClick={() => { deleteLink(emailItem.id) }}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>

            </div>

{/* ............................................................................................................... */}


            <div>
                <h1>Important Personal Data</h1>
                <form>
                    <label htmlFor="PersonalId" >id</label>
                    <input type="number" id="PersonalId" value={PersonaldataId} onChange={(e) => setPersonaldataId(e.target.value)}/>
                    <label htmlFor="Personaldataname">Enter the Data name:</label>
                    <input type="text" id="Personaldataname" value={Personaldataname} onChange={(e) => setPersonaldataname(e.target.value)}/>
                    <label htmlFor="Personaldatainfo">Enter the Link URL:</label>
                    <input type="text" id="Personaldatainfo" value={Personaldatainfo} onChange={(e) => setPersonaldatainfo(e.target.value)}/>
                    <button onClick={AddPersonaldata}>Add link</button>
                </form>
                <Table striped border={2}>
                    <thead>
                        <tr key="">
                            <td>Id</td>
                            <td>Data Name</td>
                            <td>Data Info</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Personaldata.map((PersonalItem, index1) =>
                                <tr key="index1">
                                    <td>{PersonalItem.PersonaldataId}</td>
                                    <td>{PersonalItem.Personaldataname}</td>
                                    <td>{PersonalItem.Personaldatainfo}</td>
                                    <td><button onClick={() => { deletePersonaldata(PersonalItem.id) }}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                    
                </Table>

            </div>
        </>
    )
}
export default Important_Sessions;