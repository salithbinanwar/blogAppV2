import React from 'react';
import './Bootnav.css'
import {
    Nav,
    
    Form,
    FormControl,
    Button,
    Navbar
} from 'react-bootstrap';
// import { Link } from 'react-router-dom'
const Bootnav = () => {
    return (
        <div>
            <div>
                {/* <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">HALOZEN</Link>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarColor01"
                            aria-controls="navbarColor01"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse " id="navbarColor01">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/admin">Admin</Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link" to="/about">About</Link>
                                </li>

                            </ul>

                            <form class="d-flex">
                                <input class="form-control me-sm-2" type="text" placeholder="Search Post" />
                                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>

                    </div>
                </nav> */}
            </div>

            <Navbar bg="navbar navbar-expand-lg navbar-dark bg-primary" expand="lg" >

                <Navbar.Brand  href="/" ><h1>Halozen</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto" >
                        <Nav.Link href="/admin" className="nav-link" >
                            <h4>Admin</h4>
                        </Nav.Link>                   
                        <Nav.Link href="#link">
                            <h4>About</h4>
                        </Nav.Link>

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className=" form-control me-sm-2" />
                        <Button variant="btn btn-secondary my-2 my-sm-0">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Bootnav;