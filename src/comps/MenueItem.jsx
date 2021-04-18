import React from 'react';



const MenueItem = (props) => {

    return(<div className="menue-item" onClick={props.onClick}>
    <div className="menue-item-icon">
        {props.logo}
    </div>
    
    <label>{props.text}</label>
</div>)
}  



export default MenueItem;
