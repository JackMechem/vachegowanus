import React from 'react';
import './buttons.css';

const Button1 = (props) => {
    return (
        
            <svg className='button1' id="Layer_26" data-name="Layer 26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1368 936">
                <a onClick={props.onClick} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
                    <polygon points="1006.29 526.25 1046.29 486.75 785.11 427.41 785.11 415.41 744.82 409.84 766.82 432.22 657.11 450.89 691.18 451.57 693.93 455.11 692.9 456.07 696.67 459.33 698 470.26 706.44 470.77 707.69 474.71 779 470.78 893.18 470.7 1006.29 526.25" />
                </a>
            </svg>
    
    )
}

export default Button1;