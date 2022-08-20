import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormControl, Nav, Navbar, Container, NavDropdown, Form, Card } from 'react-bootstrap';

import { getAllOffres, getStatus } from "../services/providerOffresService"
import { Offer } from "./offer";

function ProviderOffres() {
    
    let [offres, setOffres] = useState([]);
    let [count, setCount] = useState(0);
    let [status, setStatus] = useState("valid");

    

    useEffect(()=>{

        getAllOffres().then((res)=>{
            setOffres(res)
            setCount(res.length)
            console.log(offres)
            
        });
        console.log("hey")
        let user = ""
        try{
            user = JSON.parse(localStorage.getItem("user")).email
        }catch(e){}
         
        getStatus(user).then((resp) => {
            if (resp == "eliminated") {
                localStorage.setItem("status", "eliminated")
            }
        })
        
    },[10])
    return (
        <React.Fragment>
            <Container fluid className="mt-5 row" style={{ background: '#f1f1f1', width:"100vw", paddingTop: "30px", paddingBottom: "30px" }}>
                <h2 className="col-12" style={{ color: 'rgb(41 93 131)', marginBottom: "-8px", textAlign: "center" }}>Number of tenders : {count} </h2>
                <hr />
                {
                    offres.map((offre) => (
                        <Offer key={offre.id} value={offre}  />
                    ))
                }
            </Container>
        </React.Fragment>
    );
}
export default ProviderOffres;
