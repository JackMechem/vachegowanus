import React from 'react';
import MenueItem from './MenueItem'
import {HiOutlineArrowLeft, HiOutlineArrowRight} from 'react-icons/hi';
import {ImExit} from 'react-icons/im';
import {useHistory, useLocation} from 'react-router-dom';

const MenueContent = () => {

    const history = useHistory();
    const location = useLocation().pathname;
    const lastLocation = parseInt(location[location.length - 1]);

    const panoAmount = 5;

    console.log(lastLocation)

    let next;
    let back;

    if(lastLocation === 1){ 
        next = lastLocation + 1;
        back = lastLocation;
    }else if(lastLocation === panoAmount){
        next = lastLocation;
        back = lastLocation - 1;
    }else{
        next = lastLocation + 1;
        back = lastLocation - 1;
    }

    return(<div className="menue-content">
        <MenueItem text="Home" logo={<ImExit/>} onClick={() => history.push("/")}/>
        <MenueItem text="Back" logo={<HiOutlineArrowLeft/>} onClick={() => {
            history.push("/Pano" + back)
            }}/>
        <MenueItem text="Next" logo={<HiOutlineArrowRight/>} onClick={() => {
            history.push("/Pano" + next)
            console.log(next);
            }}/>
    </div>)
}

export default MenueContent;