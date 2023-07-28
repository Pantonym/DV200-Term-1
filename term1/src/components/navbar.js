import React from "react";
import '../App.css';

function BasicNavbar() {
    return (

        <div className="nav_bg" style={{ position: 'fixed', top: 20 }}>

            <div className="nav flex-column">
                <a className="nav-link Libre Font_Body" style={{ color: 'black' }} href="/">Landing</a>
                <a className="nav-link Libre Font_Body" style={{ color: 'black' }} href="/compare">Compare</a>
                <a className="nav-link Libre Font_Body" style={{ color: 'black' }} href="/timeline">Timeline</a>
            </div>

            <hr></hr>

        </div>

    )
}

export default BasicNavbar;