import logo from "../images/Account_Standin.svg"

import React from "react";
import '../App.css';
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

function BasicNavbar() {
    return (
        <Navbar className="nav_bg" sticky="top">
            <Container>
                    <Navbar.Brand className="nav_text" href="/">
                        <img className="account_img inline" src={logo} alt="Logo"></img>
                        <h4 className="nav_text inline" >Account</h4>
                    </Navbar.Brand>

                    <Nav>
                        <Nav.Link className="nav_text" href="/">
                            <h4 className="nav_text">Home</h4>
                        </Nav.Link>

                        <Nav.Link href="/compare">
                            <h4 className="nav_text">Compare Data</h4>
                        </Nav.Link>

                        <Nav.Link href="/timeline">
                            <h4 className="nav_text">Timeline</h4>
                        </Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}

export default BasicNavbar;