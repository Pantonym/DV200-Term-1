import React from "react";
import '../App.css';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

function BasicNavbar() {
    return (

        <Navbar className="nav_bg" sticky="top">

            <Nav className="nav flex-column">
                <a className="nav-link Libre Font_Body" style={{color: 'black'}} href="/">Landing</a>
                <a className="nav-link Libre Font_Body" style={{color: 'black'}} href="/compare">Compare</a>
                <a className="nav-link Libre Font_Body" style={{color: 'black'}} href="/timeline">Timeline</a>
            </Nav>

        </Navbar>

    )
}

export default BasicNavbar;