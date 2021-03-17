import React from 'react';
import { Pannellum } from "pannellum-react";
import '../style/comps.css';
import PullupMenue from '../Menue/PullupMenue';



const ViewPano = (props) => {

   
    return(
    <div>
        <PullupMenue/>
        <Pannellum
            width="100%"
            height="100vh"
            image={props.pano}
            pitch={10}
            yaw={180}
            hfov={110}
            minHfov={110}
            maxHfov={110}
            showZoomCtrl={false}
            showFullscreenCtrl={false}
            orientationOnByDefault={true}
            autoRotate={6}
            autoLoad
            onLoad={() => {
                console.log("panorama loaded");
            }}
            
        ></Pannellum>
        </div>
    )
}
export default ViewPano;
