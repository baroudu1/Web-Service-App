import React, { useState, useEffect } from "react";
import { registerProvider, registerProvider1 } from "../services/providerOffresService"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormControl, Nav, Navbar, Container, NavDropdown, Form, Card, Modal } from 'react-bootstrap';

import Swal from 'sweetalert2'

export const Offer = (props) => {
    let [offre, setOffre] = useState([props.value]);
    let [name, setName] = useState("");
    let [email, setEmail] = useState();
    let [price, setPrice] = useState(0);
    let [provider, setProvider] = useState({});

    let [id, setId] = useState(props.value.id);
    let [title, setTitle] = useState(props.value.title);
    let [description, setDescription] = useState(props.value.description);
    let [resources, setResources] = useState(props.value.resources);
    let [date, setDate] = useState(props.value.date);
    let [password, setPassword] = useState(props.value.date);

    /////////
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (localStorage.getItem("status") == "eliminated"){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'You have been eliminated',
                showConfirmButton: false,
                timer: 1500,
            })
            return;
        }
        setShow(true)
    };

    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => {
        setShowLogin(false)
    };
    const handleShowLogin = () => {
        
        handleClose()
        setShowLogin(true)
    };
    ////////////

    useEffect(() => {
        
        let user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            setName(user.name)
            setEmail(user.email)
        }
        
      }, [])

    const addProvider = () => {

        provider = {
            "name": name,
            "email": email,
            "password": email,
            "username": email,
            "price": price,
            "offers": offre,
            "roles": ["provider"]
        }
        setProvider(provider)


        let user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            registerProvider1(provider).then((res) => {
                console.log(res)
            })
        }

        registerProvider(name, email, email, email, ["provider"]).then((res) => {

            registerProvider1(provider).then((res) => {

                console.log(res)
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Request has been sent successfully',
                showConfirmButton: false,
                timer: 1500,
            })
    
            handleClose()
            return;
        })

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Request has been sent successfully',
            showConfirmButton: false,
            timer: 1500,
        })

        handleClose()
    }

    const login = () => {
        let user = {
            "name": password,
            "email": email
        }
        localStorage.setItem("user", JSON.stringify(user))
        handleCloseLogin()
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'you\'re logged in successfully',
            showConfirmButton: false,
            timer: 1500,
        })
    }


    return (
        <React.Fragment>
            <Card className="mt-5 col-md-8" style={{ margin: 'auto' }}>
                <Card.Body >
                    <Card.Title style={{ width: '100%', textAlign: "center" }}>{title}</Card.Title>
                    <Card.Text style={{ width: '100%', textAlign: "center" }}>{description}</Card.Text>
                    <Card.Text>
                        {
                            resources.map((resource, i) => {
                                return (
                                    <div key={i}>
                                        <p>{"{"}</p>
                                        <div className='px-4'>
                                            {resource.speed && (<p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "8rem", display: "inline-block" }}>Resource : </span> Printer</p>)}
                                            {(resource.cpu != null) && (<p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "8rem", display: "inline-block" }}>Resource : </span> Computer</p>)}
                                            <p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>Marque : </span> {resource.marque}</p>
                                            {(resource.cpu != null) && (<p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>CPU : </span> {resource.cpu}</p>)}
                                            {resource.hardDisk && (<p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>Hard Disk : </span> {resource.hardDisk}</p>)}
                                            {resource.ram && (<p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>RAM : </span> {resource.ram}</p>)}
                                            {(resource.screen != null) && (<p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>Screen : </span> {resource.screen}</p>)}
                                            {resource.speed && (<p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>Speed : </span> {resource.speed}</p>)}
                                            {resource.resolution && (<p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>Resolution : </span> {resource.resolution}</p>)}
                                            <p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>Qte : </span> {resource.qte}</p>
                                        </div>
                                        <p>{"}"}</p>
                                    </div>
                                )
                            })
                        }
                        <hr />
                        <p>{date}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>
                        make offer
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {
                            !localStorage.getItem("user") && (
                                    <><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Company name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="name"
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        } } />
                                </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="name@example.com"
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            } } />
                                    </Form.Group></>
                            )
                        }
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="en (DH)"
                                onChange={(e) => {
                                    setPrice(e.target.value)
                                }}

                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {
                        !localStorage.getItem("user") && (
                        <Button variant="primary" onClick={
                            handleShowLogin
                        }>
                            Already exist
                        </Button>
                    )}
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={
                        addProvider
                    }>
                        register
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showLogin} onHide={handleCloseLogin}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="exemple@gmail.com"
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="password"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}

                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLogin}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={
                        login
                        // console.log("hey")
                    }>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}


// const Offer = (props) => {
//     let [id, setId] = useState(props.value.id);
//     let [title, setTitle] = useState(props.value.title);
//     let [description, setDescription] = useState(props.value.description);
//     let [resources, setResources] = useState(props.value.resources);
//     let [date, setDate] = useState(props.value.date);

//     return (
//         <Card style={{ width: '18rem' }}>
//             <Card.Body>
//                 <Card.Title>{title}</Card.Title>
//                 <Card.Text>{description}</Card.Text>
//                 <Card.Text>
//                     {
//                         resources.map((resource, i) => {
//                             return (
//                                 <div key={i}>
//                                     <p>{"{"}</p>
//                                     <div className='px-4'>
//                                         {resource.speed && (<p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>Resource : </span> Printer</p>)}
//                                         {(resource.cpu != null) && (<p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>Resource : </span> Computer</p>)}
//                                         <p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>Marque : </span> {resource.marque}</p>
//                                         {(resource.cpu != null) && (<p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>CPU : </span> {resource.cpu}</p>)}
//                                         {resource.hardDisk && (<p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>Hard Disk : </span> {resource.hardDisk}</p>)}
//                                         {resource.ram && (<p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>RAM : </span> {resource.ram}</p>)}
//                                         {(resource.screen != null) && (<p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>Screen : </span> {resource.screen}</p>)}
//                                         {resource.speed && (<p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>Speed : </span> {resource.speed}</p>)}
//                                         {resource.resolution && (<p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>Resolution : </span> {resource.resolution}</p>)}
//                                         <p><span className='font-weight-bold' style={{ fontWeight: "bold", minWidth: "10rem", display: "inline-block" }}>Qte : </span> {resource.qte}</p>
//                                     </div>
//                                     <p>{"}"}</p>
//                                 </div>
//                             )
//                         })
//                     }
//                     <hr />
//                     <p>{date}</p>
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//         </Card>
//     );
// }
// export default Offer;
