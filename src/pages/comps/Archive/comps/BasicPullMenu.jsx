import React, { useState } from 'react';
import { TiArrowSortedUp } from 'react-icons/ti';
import '../archive.css';


const BasicPullMenu = (props) => {

    const [open, SetOpen] = useState(false); // is the menu open? Mainly just to have a trigger lever effect.
    const [sty, SetSty] = useState({ opacity: 0, visibility: "hidden", transitionDuration: "500ms", }) // The start menu style

    //const items = props.items.map((i) => {  })

    return (<div className="pullup-menue">

        <button className="pullup-button" onClick={() => {
            const isOpen = !open;
            if (isOpen) {
                SetSty({ transitionDuration: "500ms" });
            } else {
                SetSty({ opacity: 0, visibility: "hidden", transitionDuration: "500ms" })
            }
            SetOpen(!open);
        }}> <TiArrowSortedUp /> </button>
        <div style={sty}>

        </div>

    </div>)
}
