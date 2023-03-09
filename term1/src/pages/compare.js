// Import React functionality
import React from "react";

const color1 = "#196296";
const color2 = "#85E8F6";

// Display data
function Compare() {

    return (
        // Display the data
        // --Linear gradient for the body
        <div style={{ background: `linear-gradient(to bottom,  ${color1} 0%,${color2} 100%)`, height: '1024px', display: 'flex', flexDirection: 'column' }}>

        </div>
    )
}

export default Compare;