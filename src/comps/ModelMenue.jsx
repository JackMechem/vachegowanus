import React, {useState} from 'react';
import { TiArrowSortedUp } from 'react-icons/ti';
import { useHistory } from 'react-router-dom';
import MenueItem from './MenueItem'
import {ImExit} from 'react-icons/im'


const ModelMenue = () => {

    
    
    const history = useHistory();
    const [open, SetOpen] = useState(false);
    const [sty, SetSty] = useState({opacity: 0, visibility: "hidden", transitionDuration: "500ms",})

    

    return(<div className="pullup-menue">

        <button className="pullup-button" onClick={() => {
            const isOpen = !open;
            if(isOpen) {
               SetSty({ transitionDuration: "500ms" });
            } else {
               SetSty({ opacity: 0, visibility: "hidden", transitionDuration: "500ms" })
            }
            SetOpen(!open);
        }}> <TiArrowSortedUp/> </button>
        <div style={sty}>
            <div className="menue-content">
            <MenueItem text="Home" logo={<ImExit/>} onClick={() => history.push("/")}/>
            </div>
        </div>
       
    </div>)
}

export default ModelMenue;