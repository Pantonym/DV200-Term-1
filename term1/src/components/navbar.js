import React from "react";
import '../App.css';

import Collapse from '../images/Collapse.svg';

function BasicNavbar() {

    // 1. Added functionality: collapsable side navbar
    var collapsed = false;

    const CloseNav = () => {

        if (collapsed === false) {
            document.getElementById("openDiv").style.width = '40px';
            document.getElementById("openDiv").style.height = '40px';

            document.getElementById("collapse_img").style.transform = 'rotate(0deg)';
            document.getElementById("links").style.display = 'none';

            collapsed = true;
        } else {
            document.getElementById("openDiv").style.width = '150px';
            document.getElementById("openDiv").style.height = '180px';

            document.getElementById("collapse_img").style.transform = 'rotate(180deg)';
            document.getElementById("links").style.display = 'inherit';

            collapsed = false;
        }

    }

    return (

        <div className="nav_bg" id="openDiv">

            <div>
                <a href="javascript:void(0)" onClick={() => CloseNav()}><img id="collapse_img" style={{ transform: 'rotate(180deg)', marginTop: '10px' }} src={Collapse}></img></a>
            </div>

            <div className="nav flex-column" id="links">
                <a className="nav-link Libre Font_Body" style={{ color: 'black' }} href="/">Landing</a>
                <a className="nav-link Libre Font_Body" style={{ color: 'black' }} href="/compare">Compare</a>
                <a className="nav-link Libre Font_Body" style={{ color: 'black' }} href="/timeline">Timeline</a>
            </div>

        </div>

    )
}

export default BasicNavbar;