import React from 'react';
import './Buttons.css'

const Buttons = (props) => {


    return (


        <svg className='button1' id="buttonplacement" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1728 1260">
            <a onClick={props.onClick1} onMouseOver={props.onMouseOver1} onMouseOut={props.onMouseOut1}>
                <circle id="p01" class="cls-1" cx="1066.12" cy="575.19" r="12.81" />
            </a>
            <a onClick={props.onClick2} onMouseOver={props.onMouseOver2} onMouseOut={props.onMouseOut2}>
                <circle id="p02" class="cls-1" cx="806.86" cy="616.42" r="13.58" />
            </a>
            <a onClick={props.onClick3} onMouseOver={props.onMouseOver3} onMouseOut={props.onMouseOut3}>
                <circle id="p04" class="cls-1" cx="653.39" cy="642.69" r="12.35" />
            </a>
            <a onClick={props.onClick4} onMouseOver={props.onMouseOver4} onMouseOut={props.onMouseOut4}>
                <circle id="p05" class="cls-1" cx="441.53" cy="1020.91" r="21.24" />
            </a>
            <a onClick={props.onClick5} onMouseOver={props.onMouseOver5} onMouseOut={props.onMouseOut5}>
                <circle id="p03" class="cls-1" cx="831.61" cy="677.15" r="14.08" />
            </a>
            <a onClick={props.onClick6} onMouseOver={props.onMouseOver6} onMouseOut={props.onMouseOut6}>
                <path id="b06-07" class="cls-1" d="M799.13,667.11l-5.81-3.36L778.23,655,705,706.88l-.94.66-8.33,5.9-.94.66-6.35,4.49-1.31.93-20.56,14.55-1.09,1-5.77,5.19-8.45,7.64c-1.18,1.05-2.37,2.12-3.54,3.19l-1,.93h-4.88l-.21-6.69-.08-2.29-.18-5.43L638,734.19h0l-1.91-2-3.74-3.83-3.49-3.59-11.38-2.58h0l-4.22-1-65.74,43.94-.92.61-31.27,20.91-9.71,6.45L512.09,772l6.8-10.51.25,6.68,8.78-13.46.12-22.09-13.23,1.65-7.13.89-5.45.67-12.7,1.58-3.55.45-16.36,9-6.84,3.76-3.9,2.15-4.46,2.44-8.19,6.27L431.13,773l-.14,5.12-.17,5.55-11.54,7.87-.9.61-7.24,4.93-31.36,21.35V816.6h-3.65l2.2-1.5a.08.08,0,0,1,0,0c-1.59-3-3.16-6-4.75-9l-.7-1.34-2.69-5.14-2.23,1.13-2.31,3.43-6.81.33-3.8.19h0l-6.43.31-4,.38-2,.19L327.31,807l-7,.67-.64.06v-2.37l2.08-1.1h0l.34-.19,6.12-3.24.61-.32,5.15-2.73.6-.32-5.36-1,17.45-6.54.32-.12.07,0V772.45l-4.24.21,3.5-1.63,7.18-3.33-.2-.38-3.36-6.42L330.1,723.08l-38.51-22.25L274.38,708l-41.12,17.15L219.2,731,96.59,782.18V839l2,11.23,1.35,7.47.16.86,15.38,11L121,886.65l52.62,37.59L192.92,938l54.66-28.92c.82-2.12,1.63-4.25,2.45-6.37v38.12h5l4.53,31.43,3.08,2.15,1.32.92,3.37,27.36L356.8,1059l11.91-6.93,2.62,1.8,42.14-24.45v-5l.09-1.18.4-4.75s.38-5.79.46-6.93l-7.8-.21-.8,12.11-.05.55-7.19-.16-.47-10.1-.06-2.17.77-.44,2.37-1.38,3.29-2,2.48-1.49v.12l8.31-4.82-.05-.92,0-2.25,2.25-1.28.73-.43.12-.07.72-.7h.48l1-.55L430,989.9l.27-.16-.1-2,2.4-29,6.59-4.56-4.09-4,4.55-6.91c.08-1.18.15-2.34.21-3.46,0-.3,0-.6.06-.91l.11-1.4-9.18-2.67,22.32-26.62.39-.47,4-4.82-8.15-2-2.46-.61-.25-2.52-.61-4.07-.08-.55-.58-3.9-.08-.54-.62-4.17-.06-.47-.8-5.38-.2-1.38-.74-4.94-.06-.47-.63-4.17-.06-.47-1-6.52-2.13-1.63h0L437,857.6l-3.32,3.64-1.08,1.17h-1.81l-6.87-.86-6.41-.79v-6.94l-4.74-.46,5.91-20.31,1.95,8.28.37-.25,3.8-31.23,29.44-7.35,15,14.52,7.81,2.67,6.65-9.27L482.22,824l.24,1.47-.48.48-3.15,25.88,1.41.16-.71,3.81-1.5,7.89h0l-.34,1.75-.26,1.41c-.21,1.08-.42,2.18-.63,3.27l-.11.61v8.13l3.73,2.84-6.89,4.61-.4,1.25v34.32l4.62-3.67c0-.19,0-.38.05-.51l.7-6.92-1.72-.3,1.86-4.2.18-.46.14-.34,1.72-4.36,2-5,.93-2.48,8.11,1.06,12.91,1.7v.53l9.93-7.89c.21-.51,3.91-9.69,3.91-9.69.08-.21.15-.4.24-.6,0,0,2.33-5.82,2.46-6.12s.17-.44.26-.66l.47-1.11,5.06-2.93,12.33-7.1-3.92,9.74,2.7,0L791.68,724.1l16.22-12.38V672.17ZM244.45,867.54l-1.61-4.47h0l1.6.19Z" />
            </a>
            <a onClick={props.onClick7} onMouseOver={props.onMouseOver7} onMouseOut={props.onMouseOut7}>
                <path id="b05" class="cls-1" d="M880.22,717.47l-46-24.84L811.5,696.9v16.6l-17.82,13.6L539,874.16l-8.91,7.08,21.73,2.48c-.72,1.6-1.43,3.21-2.15,4.81l-25.15-2.87-1.52,1.2-5.45,4.33L501,904.31l16.33,2.15c-.51,1.63-1,3.26-1.54,4.89l-20.29-2.68L494,909.85,492.55,911h0l-6.09,4.84-2,1.55h0l-1.36,1.07-.1.08-1.31,1-.52.41,0,0-7.6,6-2.18,1.73v60.67l29.72,17.16,1.38-.8,139-80.23,8.13-4.7,4.78-2.76,75.81-43.77,50.77-23.49,2.6-1.2,45.25-20.94,6.52-3,.13-.06,3.39-1.57,5.08-2.35V742.23l-.52-.84-1.64.74-2.17,1.12,0-2.76v-4.55l-.86-.41.26-.16L871.17,718l.86.42v4.81Z" />
            </a>
            <a onClick={props.onClick8} onMouseOver={props.onMouseOver8} onMouseOut={props.onMouseOut8}>
                <path id="b03" class="cls-1" d="M989.28,250.36l-45.31,0-40.65,27.49-19.1,12.92-1.65,1.12-1.47,1-.86.58-46.14,31.2L788,355.83,463.12,587.43l0,.06-.48.76Q458.3,595.12,454,602l-5,7.89-9.85,5.76,4.3,1.07.6.15,10.25,2.56q2.67,4.35,5.35,8.7l13.24,21.51,4.83,3.83v4l3,4.81,2.55,4.15v.73l.91.64,7.52-12.33.09-.06,1.45-.9,8.81-5.42,31.39-19.31.11-.06V627.8l16.48-11V581.26l.26-.16L741.77,464.81l-4.37-2.52,1.2-.69.72.41.47-.27.72.41.47-.27.72.42h0l.47-.28.72.42h0l.46-.28.72.42.47-.27.68.39,2.21-1.35L848,390.49l34-22.73,35.08-23.45,25-16.7,25-16.71,1.38-.92,16.28-10.88Q989.39,276,994,253Z" />
            </a>
            <a onClick={props.onClick9} onMouseOver={props.onMouseOver9} onMouseOut={props.onMouseOut9}>
                <path id="b02" class="cls-1" d="M571.75,658.36,554.52,646l-.15-.11-.75-.43V583.28l190-115.39.7-.44,3.73-2.26,1.28-.78L837.22,411l12.94-7.85L860.87,396l28.21-18.85,71.3-47.66,16.55-10.05q-2.73,13.44-5.44,26.91-2.18,10.71-4.31,21.39l-.9,4.48q-2.34,11.67-4.66,23.31l-1,5,11.54,6.73-15,14.08-.84.79-.22,1.13q-3.4,17.28-6.82,34.57l-.53,2.67,2.42,1.24L961.48,467l.21,8.88,1-.59q-2.37,8.54-4.76,17.08l-41.15,36,14.69-32.07-49.7,34.61-11.51,4.58-2-3.3-32.39,11.12-.3.17q-16.17,9.35-32.34,18.67l-23.33,9.29-.78-.44-28.51,8.66-10.24,6-8.18,4.59c-1.09.62-2.18,1.24-3.27,1.84l-27.18,15.27-3.39,1.9v-5.14l-8,4.67-2.43,1.39-58.24,27.2L613.8,643l-.1-2.1-5.28,3.46-27.27,17.93-1,.62-1.1.74Z" />
            </a>
            <a onClick={props.onClick10} onMouseOver={props.onMouseOver10} onMouseOut={props.onMouseOut10}>
                <path id="b01" class="cls-1" d="M1051,717.53l-10.13-5.85-16.49-9.52v-6.5l48.7-60.75-43,12.33-3.62-2.62c15.76-18.14,55.6-63.73,56-64.22l1-1.16-1.8-20h-24.82L1008,603l1-18.21-1.5-1.16-1.77-1.37-5.16-4-13.7-10.58L982.45,583l-4.29-3.34c-1-.79-2-1.57-3-2.36l-4.42-3.42c-.71-.57-1.46-1.16-2.21-1.74l-.42-.32,2.09-22.61-9.41-4.72-4.24-2.12.36-10.45,2.06,1v-9.9l-1.68-.74c0-.42,0-.83,0-1.24l7.26-25.58.06-.22c2.46-8.77,4.93-17.65,7.38-26.49l1.08-3.91-16.17-8.27q3-15.39,6.07-30.77l16.4-15.44,4.73-4.45-15.43-9q2.31-11.62,4.65-23.27l.9-4.49q2.13-10.68,4.31-21.37,3.42-16.95,6.85-33.88l16.22-80.28q3.17-15.6,6.31-31.2l2.07-10.23,3.42-29.52,2.27-10.63,80.66-76.24.37.24,70.39,45,1.8,104.39-19.72,1.07,1,53.47,8.38-.46,3.4,1.73,0,1.26q1.07,35.22,2.13,70.43l0,1.23,11.61,14.14v8.81l6.39,3.55,2.5-1.54,31.11,37.91,70.76,38.54v33.86l-5,6.24-53.73,67-78.06,97.35h-1.88v1.75l-19.68,11.36-10.74,6.2-9,5.19-.2-.11Z" />
            </a>
            <a onClick={props.onClick11} onMouseOver={props.onMouseOver11} onMouseOut={props.onMouseOut11}>
                <rect id="section1" class="cls-1" x="1175.22" y="24.27" width="194.59" height="66.6" />
            </a>
            <a onClick={props.onClick12} onMouseOver={props.onMouseOver12} onMouseOut={props.onMouseOut12}>
                <rect id="plan06" class="cls-1" x="1344.14" y="337.48" width="210.12" height="71.91" />
            </a>
            <a onClick={props.onClick13} onMouseOver={props.onMouseOver13} onMouseOut={props.onMouseOut13}>
                <rect id="plan03" class="cls-1" x="1344.14" y="439.42" width="210.12" height="71.91" />
            </a>
            <a onClick={props.onClick14} onMouseOver={props.onMouseOver14} onMouseOut={props.onMouseOut14}>
                <rect id="plan01" class="cls-1" x="1348.58" y="515.54" width="201.23" height="68.87" />
            </a>
            <a onClick={props.onClick15} onMouseOver={props.onMouseOver15} onMouseOut={props.onMouseOut15}>
                <rect id="section2" class="cls-1" x="713.78" y="37.04" width="205.37" height="70.29" />
            </a>
            <a onClick={props.onClick16} onMouseOver={props.onMouseOver16} onMouseOut={props.onMouseOut16}>
                <rect id="section3" class="cls-1" x="398.79" y="187.71" width="197.68" height="67.66" />
            </a>
            <a onClick={props.onClick17} onMouseOver={props.onMouseOver17} onMouseOut={props.onMouseOut17}>
                <rect id="section4" class="cls-1" x="38.32" y="346.73" width="192.83" height="65.99" />
            </a>
            <a onClick={props.onClick18} onMouseOver={props.onMouseOver18} onMouseOut={props.onMouseOut18}>
                <rect fill="#ffffff" id="overview" class="cls-1" x="23.9" y="1118.63" width="432.78" height="105.07" />
            </a>
            <a onClick={props.onClick19} onMouseOver={props.onMouseOver19} onMouseOut={props.onMouseOut19}>
                <rect id="Program" class="cls-1" x="477.23" y="1118.63" width="389.13" height="105.07" />
            </a>
            <a onClick={props.onClick20} onMouseOver={props.onMouseOver20} onMouseOut={props.onMouseOut20}>
                <rect id="Space" class="cls-1" x="879.63" y="1118.63" width="389.13" height="105.07" />
            </a>
            <a onClick={props.onClickSlides} onMouseOver={props.onMouseOverSlides} onMouseOut={props.onMouseOutSlides}>
                <rect class="cls-1" x="30.7" y="24.27" width="222.22" height="137.07" />
            </a>

            <a onClick={props.onClickArcade} onMouseOver={props.onMouseOverArcade} onMouseOut={props.onMouseOutArcade}>
                <path class="cls-1" d="M927.88,539.65c5,18.05,11.09,37.63,26.65,48.07,9.65,6.48,21.61,8.41,32.06,13.5,7.46,3.63,14.16,8.88,22,11.58s17.74,2.16,23-4.3l-24,34.79c-2.46,3.56-5,7.75-4,11.94s5.19,6.52,7.68,9.94c9.11,12.5-6.23,31.69,1.68,45,6.09,10.22,24.53,15.25,20.58,26.46-1,2.74-3.25,4.78-5.45,6.7-22,19.12-44.4,38.08-70,52s-54.8,22.6-83.78,19.69c-5.76-19.83-10.79-43.52,2.59-59.24,9.46-11.11,28-19.73,24-33.75-2.52-8.76-12.74-12.22-19.79-18-9.9-8.08-13.74-21.17-18.62-33s-12.82-24.2-25.39-26.48c.79-14.81,1.39-30.48-5.63-43.54s-24.62-21.65-37.19-13.78c-19.47,12.19-9.1,47.7-28.12,60.57-4.92,3.34-11,4.42-16.26,7.28C742.23,659.29,737.09,667,730,672a14.14,14.14,0,0,1-20.75-4.18c-1.9-3.06-9.44-3.94-9.88-.36-1.18,6.23,9.64,1.53,9.21,7.19-1.77,23.1-27.85,35-49.9,42-6.35,2-13.43,4-19.47,1.22-6.56-3.07-9.81-10.95-16.36-14-11.42-5.37-22.85,6.3-32.74,14.15a62.77,62.77,0,0,1-28.28,12.63c-4.14.71-8.56,1-12.42-.71-5.1-2.21-8.26-7.35-12.8-10.55-7.84-5.53-18.42-4.54-27.83-2.71A221.88,221.88,0,0,0,416,758.59c-4.93,3.8-9.9,7.91-15.93,9.45-14.5,3.71-27.84-8.36-38-19.39l-68.66-74.82c-7.58-8.25-15.4-16.93-18.44-27.72-5.41-19.21,6.43-39.92,23-51.11s36.82-15,56.47-18.49c8.69-1.56,17.87-3.09,26.15,0,13.93,5.12,20.25,20.76,29.48,32.37,11.35,14.27,28.57,23.65,37.42,39.58,6.61,11.89,9.32,28,21.85,33.29,17.26,7.31,33.72-12.84,52.23-15.83,26.87-4.33,54.75,27.93,77.73,13.33,7.14-4.53,11.41-12.79,18.82-16.86,10.42-5.73,23.18-1.54,34.85.77s26.77.71,31.08-10.38c1.7-4.39,1.2-9.35,2.5-13.88,2.73-9.6,12.53-15.1,21.48-19.51q54-26.64,109.42-50.16c17-7.19,34.59-16.48,52.37-21.34C888.2,542.81,909,542.24,927.88,539.65Z" />
            </a>
        </svg>)
}

export default Buttons;