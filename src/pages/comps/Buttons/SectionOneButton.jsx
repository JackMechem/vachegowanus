import React from 'react';
import './ButtonStyle.css';
const SectionOneButton = () => {
    return (
        <div className="section-button-one">
            <svg id="Layer_27" data-name="Layer 27" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1368 936">
                <a style={{ cursor: "pointer" }} onClick={() => {
                    //open image
                    console.log("clicked svg")
                }}>
                    <path d="M168.94,362.72l21.93,46.52s62.52,27,75.56,2.37,59.55-91,59.55-91-9.78-22.82-29.63-26.37S238,341.39,238,341.39l-12.44-9.78s11.85-21,6.22-34.37-79.41-7.41-79.41-7.41S83,368.06,115.91,373.69,168.94,362.72,168.94,362.72Z" />
                </a>
            </svg>
        </div>
    )
}

export default SectionOneButton;