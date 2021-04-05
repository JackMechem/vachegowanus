import React from 'react';

const Buttons = (props) => {


    return (
        <svg className='button1' id="Layer_25" data-name="Layer 25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1368 936">
            <a onClick={props.onClick1} onMouseOver={props.onMouseOver1} onMouseOut={props.onMouseOut1}>
                <polygon class="cls-1" points="1006.29 526.25 1046.29 486.75 785.11 427.41 785.11 415.41 744.82 409.84 766.82 432.22 657.11 450.89 691.18 451.57 693.93 455.11 692.9 456.07 696.67 459.33 698 470.26 706.44 470.77 707.69 474.71 779 470.78 893.18 470.7 1006.29 526.25"/>
            </a>
            <a onClick={props.onClick2} onMouseOver={props.onMouseOver2} onMouseOut={props.onMouseOut2}>
                <polygon class="cls-1" points="588.33 328.92 588.33 354.6 533.22 358.72 533.22 373.2 652 437.24 680.36 446.49 766.41 431.28 740 407.48 660.59 395.53 660.59 384.27 702.59 374.58 611.58 328.34 611.29 326.04 588.33 328.92" />
            </a>
            <a onClick={props.onClick3} onMouseOver={props.onMouseOver3} onMouseOut={props.onMouseOut3}>
                <polygon class="cls-1" points="391.11 400 390.22 516.83 444.45 515.18 560.73 490.21 524.22 471.98 505.71 427.82 494.01 429.33 494.01 400.89 391.11 400"/>
            </a>
        </svg>)
}

export default Buttons;