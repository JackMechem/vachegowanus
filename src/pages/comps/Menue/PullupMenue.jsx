import React, {useState} from 'react';
import { TiArrowSortedUp } from 'react-icons/ti';
import MenueContent from './MenueContent';
import '../style/comps.css'



const PullupMenue = () => {

    
    

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
            <MenueContent/>
        </div>
       
    </div>)
}

export default PullupMenue;