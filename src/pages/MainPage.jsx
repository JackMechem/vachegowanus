import React, { useState, useRef, useEffect, useImperativeHandle } from 'react';
import './pages.css';
import ImageOne from '../Textures_v1/pu_p_01.png';
import ImageTwo from '../Textures_v1/pu_p_02.png';
import ImageThree from '../Textures_v1/pu_p_04.png';
import ImageFour from '../Textures_v1/pu_p_05.png';
import ImageFive from '../Textures_v1/pu_p_03.png';

import ImageSix from '../Textures_v1/pu_b_06.png';
import ImageSeven from '../Textures_v1/pu_b_05.png';
import ImageEight from '../Textures_v1/pu_b_03.png';
import ImageNine from '../Textures_v1/pu_b_02.png';
import ImageTen from '../Textures_v1/pu_b_01.png';
import ImageEleven from '../Textures_v1/dw_b_06.png';
import ImageTwelve from '../Textures_v1/dw_b_05.png';
import ImageThirteen from '../Textures_v1/dw_b_03.png';
import ImageFourteen from '../Textures_v1/dw_b_02.png';
import ImageFifteen from '../Textures_v1/dw_b_01.png';
import ImageSixteen from '../Textures_v1/pu_section_01.png';
import ImageSeventeen from '../Textures_v1/pu_plan_06.png';
import ImageEighteen from '../Textures_v1/pu_plan_03.png';
import ImageNineteen from '../Textures_v1/pu_plan_01.png';
import ImageTwenty from '../Textures_v1/pu_section_02.png';
import ImageTwentyOne from '../Textures_v1/pu_section_03.png';
import ImageTwentyTwo from '../Textures_v1/pu_section_04.png';

import { useHistory } from 'react-router-dom';
import SectionOneButton from './comps/Buttons/SectionOneButton';
import Button1 from '../textures/svgs/button1';
import Button2 from '../textures/svgs/button2';
import Button3 from '../textures/svgs/button3';
import Buttons from '../textures/svgs/Buttons';
import SectionView from './comps/SectionView/SectionView';
import SectionOne from '../textures/sections/longsection_bite-01.jpg';
import SectionImage from '../Textures_v1/bg-01.png'


const MainPage = (props) => {

    const MouseOver = (img) => {
        setInfo({
            backgroundImage: `url(${img})`,
            opacity: infoOpacity,
        })
        SetMarkers({
            opacity: 0,
        })
    }
    const MouseOut = () => {

        setInfo({

        })
        SetMarkers({
            opacity: 100,
        })
    }
    const MouseOverSec = (img) => {
        setInfo({
            backgroundImage: `url(${img})`,
            opacity: infoOpacity,
        })
    }


    let [Info, setInfo] = useState({});
    let [markers, SetMarkers] = useState({});

    const [secOne, SetSecOne] = useState(false);
    const [secTwo, SetSecTwo] = useState(false);
    const [secThree, SetSecThree] = useState(false);
    const [secFour, SetSecFour] = useState(false);
    const [secFive, SetSecFive] = useState(false);
    const [secSix, SetSecSix] = useState(false);

    const infoOpacity = .75;

    const history = useHistory();

    //const secView = SectionView();

    //console.log(secView.props.imageVisible)


    const imageCallbackOne = (index) => {
        console.log(index);
        SetSecOne(index);
    }
    const imageCallbackTwo = (index) => {
        console.log(index);
        SetSecTwo(index);
    }
    const imageCallbackThree = (index) => {
        console.log(index);
        SetSecThree(index);
    }
    const imageCallbackFour = (index) => {
        console.log(index);
        SetSecFour(index);
    }
    const imageCallbackFive = (index) => {
        console.log(index);
        SetSecFive(index);
    }
    const imageCallbackSix = (index) => {
        console.log(index);
        SetSecSix(index);
    }

    return (<div className="main">;



      


        {secOne && <SectionView imageCallback={imageCallbackOne} image={ImageEleven} />}
        {secTwo && <SectionView imageCallback={imageCallbackTwo} image={ImageTwelve} />}
        {secThree && <SectionView imageCallback={imageCallbackThree} image={ImageThirteen} />}
        {secFour && <SectionView imageCallback={imageCallbackFour} image={ImageFourteen} />}
        {secFive && <SectionView imageCallback={imageCallbackFive} image={ImageFifteen} />}


        <div className="plan">
            <div className="markers" style={markers}>

</div>

            <div style={Info} className="info">

                <Buttons 
                    onMouseOver1={() => {
                        MouseOver(ImageOne);
                    }}
                    onMouseOut1={() => {
                        MouseOut();
                    }}
                    onClick1={() => {
                        history.push('/Pano1');
                    }}


                    onMouseOver2={() => {
                        MouseOver(ImageTwo);
                    }}
                    onMouseOut2={() => {
                        MouseOut();
                    }}
                    onClick2={() => {
                        history.push('/Pano2');
                    }}

                    onMouseOver3={() => {
                        MouseOver(ImageThree);
                    }}
                    onMouseOut3={() => {
                        MouseOut();
                    }}
                    onClick3={() => {
                        history.push('/Pano3');
                    }}
                    onMouseOver4={() => {
                        MouseOver(ImageFour);
                    }}
                    onMouseOut4={() => {
                        MouseOut();
                    }}
                    onMouseOver5={() => {
                        MouseOver(ImageFive);
                    }}
                    onMouseOut5={() => {
                        MouseOut();
                    }}
                    onClick5={() => {
                        history.push('/Pano5');
                    }}
                    onMouseOver6={() => {
                        MouseOver(ImageSix);
                    }}
                    onMouseOut6={() => {
                        MouseOut();
                    }}
                    onClick6={() => {
                        SetSecOne(!secOne)
                    }}
                    onMouseOver7={() => {
                        MouseOver(ImageSeven);
                    }}
                    onMouseOut7={() => {
                        MouseOut();
                    }}
                    onClick7={() => {
                        SetSecTwo(!secTwo)
                    }}
                    onMouseOver8={() => {
                        MouseOver(ImageEight);
                    }}
                    onMouseOut8={() => {
                        MouseOut();
                    }}
                    onClick8={() => {
                        SetSecThree(!secThree)
                    }}
                    onMouseOver9={() => {
                        MouseOver(ImageNine);
                    }}
                    onMouseOut9={() => {
                        MouseOut();
                    }}
                    onClick9={() => {
                        SetSecFour(!secFour)
                    }}
                    onMouseOver10={() => {
                        MouseOver(ImageTen);
                    }}
                    onMouseOut10={() => {
                        MouseOut();
                    }}
                    onClick10={() => {
                        SetSecFive(!secFive)
                    }}
                    onMouseOver11={() => {
                        MouseOverSec(ImageSixteen);
                    }}
                    onMouseOut11={() => {
                        MouseOut();
                    }}
                    onClick11={() => {
                        SetSecSix(!secSix);
                    }}
                    onMouseOver12={() => {
                        MouseOverSec(ImageSeventeen);
                    }}
                    onMouseOut12={() => {
                        MouseOut();
                    }}
                    onClick12={() => {
                        SetSecSix(!secSix);
                    }}
                    onMouseOver13={() => {
                        MouseOverSec(ImageEighteen);
                    }}
                    onMouseOut13={() => {
                        MouseOut();
                    }}
                    onClick13={() => {
                        SetSecSix(!secSix);
                    }}
                    onMouseOver14={() => {
                        MouseOverSec(ImageNineteen);
                    }}
                    onMouseOut14={() => {
                        MouseOut();
                    }}
                    onClick14={() => {
                        SetSecSix(!secSix);
                    }}
                    onMouseOver15={() => {
                        MouseOverSec(ImageTwenty);
                    }}
                    onMouseOut15={() => {
                        MouseOut();
                    }}
                    onClick15={() => {
                        SetSecSix(!secSix);
                    }}
                    onMouseOver16={() => {
                        MouseOverSec(ImageTwentyOne);
                    }}
                    onMouseOut16={() => {
                        MouseOut();
                    }}
                    onClick16={() => {
                        SetSecSix(!secSix);
                    }}
                    onMouseOver17={() => {
                        MouseOverSec(ImageTwentyTwo);
                    }}
                    onMouseOut17={() => {
                        MouseOut();
                    }}
                    onClick17={() => {
                        SetSecSix(!secSix);
                    }}
                    onMouseOver17={() => {
                        MouseOverSec(ImageTwentyTwo);
                    }}
                    onMouseOut17={() => {
                        MouseOut();
                    }}
                    onClick17={() => {
                        SetSecSix(!secSix);
                    }}
                    onMouseOver18={() => {
                    }}
                    onMouseOut18={() => {
                    }}
                    onClick18={() => {
                        history.push('/')
                    }}
                    onMouseOver19={() => {
                    }}
                    onMouseOut19={() => {
                    }}
                    onClick19={() => {
                        
                        history.push('/program')
                    }}
                    onMouseOver20={() => {
                    }}
                    onMouseOut20={() => {
                    }}
                    onClick20={() => {
                        
                        history.push('/space')
                    }}
                />




            </div>

        </div>
    </div>)
}

export default MainPage;