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
import ImageEleven from '../Textures_v1/dw_b_06.jpg';
import ImageTwelve from '../Textures_v1/dw_b_05.jpg';
import ImageThirteen from '../Textures_v1/dw_b_03.jpg';
import ImageFourteen from '../Textures_v1/dw_b_02.jpg';
import ImageFifteen from '../Textures_v1/dw_b_01.jpg';
import ImageSixteen from '../Textures_v1/pu_section_01.png';
import ImageSeventeen from '../Textures_v1/pu_plan_06.png';
import ImageEighteen from '../Textures_v1/pu_plan_03.png';
import ImageNineteen from '../Textures_v1/pu_plan_01.png';
import ImageTwenty from '../Textures_v1/pu_section_02.png';
import ImageTwentyOne from '../Textures_v1/pu_section_03.png';
import ImageTwentyTwo from '../Textures_v1/pu_section_04.png';
import ImageTwentyThree from '../Textures_v1/pu_b_04.png'
import ImageTwentyFour from '../Textures_v1/dw_b_04.jpg';

import SectionOne from '../Textures_v1/Section-01.jpg';
import SectionTwo from '../Textures_v1/Section-02.jpg';
import SectionFour from '../Textures_v1/Section-04.jpg'

import PlanOne from '../Textures_v1/dw_plan_01.jpg';
import PlanTwo from '../Textures_v1/dw_plan_03.jpg';
import PlanThree from '../Textures_v1/dw_plan_06.jpg';

import SlidesOne from '../Textures_v1/viewslidesIcon.png'

import { useHistory } from 'react-router-dom';
import Button3 from '../textures/svgs/button3';
import Buttons from '../textures/svgs/Buttons';
import SectionView from './comps/SectionView/SectionView';


const MainPage = (props) => {

    const images_ = [
        ImageOne,
        ImageTwo,
        ImageThree,
        ImageFour,
        ImageFive,
        ImageSix,
        ImageSeven,
        ImageEight,
        ImageNine,
        ImageTen,
        ImageEleven,
        ImageTwelve,
        ImageThirteen,
        ImageFourteen,
        ImageFifteen,
        ImageSixteen,
        ImageSeventeen,
        ImageEighteen,
        ImageNineteen,
        ImageTwenty,
        ImageTwentyOne,
        ImageTwentyTwo,
        SectionOne,
        SectionTwo,
        PlanOne,
        PlanTwo,
        PlanThree,
        SectionFour,
        SlidesOne,
        ImageTwentyThree,
        ImageTwentyFour,
    ]
    let Images = [];
    for(let i = 0; i <=images_.length; i++){
        Images[i] = new Image();
        console.log(i);
        Images[i].src = images_[i];
    }

    

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
    const [secSeven, SetSecSeven] = useState(false);
    const [secEight, SetSecEight] = useState(false);
    const [secNine, SetSecNine] = useState(false);
    const [secTen, SetSecTen] = useState(false);
    const [secEleven, SetSecEleven] = useState(false);
    const [secTwelve, SetSecTwelve] = useState(false);
    const [secArcade, SetSecArcade] = useState(false);
    const [Presentation, SetPresentation] = useState(false);

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
    const imageCallbackSeven = (index) => {
        console.log(index);
        SetSecSeven(index);
    }
    const imageCallbackEight = (index) => {
        console.log(index);
        SetSecEight(index);
    }
    const imageCallbackNine = (index) => {
        console.log(index);
        SetSecNine(index);
    }
    const imageCallbackTen = (index) => {
        console.log(index);
        SetSecTen(index);
    }
    const imageCallbackEleven = (index) => {
        console.log(index);
        SetSecEleven(index);
    }
    const imageCallbackTwelve = (index) => {
        console.log(index);
        SetSecTwelve(index);
    }
    const imageCallbackArcade = (index) => {
        console.log(index);
        SetSecArcade(index);
    }
    const imageCallbackPresentaion = (index) => {
        console.log(index);
        SetPresentation(index);
    }

    return (<div className="main">;


      


        {secOne && <SectionView imageCallback={imageCallbackOne} image={Images[10].src} /> /*11*/} 
        {secTwo && <SectionView imageCallback={imageCallbackTwo} image={Images[11].src} />}
        {secThree && <SectionView imageCallback={imageCallbackThree} image={Images[12].src} />}
        {secFour && <SectionView imageCallback={imageCallbackFour} image={Images[13].src} />}
        {secFive && <SectionView imageCallback={imageCallbackFive} image={Images[14].src} />}
        {secArcade && <SectionView imageCallback={imageCallbackArcade} image={Images[30].src} />}

        {secSix && <SectionView imageCallback={imageCallbackSix} image={Images[22].src} />}

        {secSeven && <SectionView imageCallback={imageCallbackSeven} image={Images[26].src} />}
        {secEight && <SectionView imageCallback={imageCallbackEight} image={Images[25].src} />}
        {secNine && <SectionView imageCallback={imageCallbackNine} image={Images[24].src} />}

        {secTen && <SectionView imageCallback={imageCallbackTen} image={Images[23].src} />}
        {secEleven && <SectionView imageCallback={imageCallbackEleven} image={Images[20].src} />}
        {secTwelve && <SectionView imageCallback={imageCallbackTwelve} image={Images[27].src} />}

        {Presentation && <SectionView imageCallback={imageCallbackPresentaion} ifra="https://indd.adobe.com/view/dccfd86a-f4cb-4291-995f-a610a139d1d1" />}


        <div className="plan">
            <div className="markers" style={markers}>

</div>

            <div style={Info} className="info">

                <Buttons 
                    onMouseOver1={() => {
                        MouseOver(Images[0].src);
                    }}
                    onMouseOut1={() => {
                        MouseOut();
                    }}
                    onClick1={() => {
                        history.push('/Pano1');
                    }}


                    onMouseOver2={() => {
                        MouseOver(Images[1].src);
                    }}
                    onMouseOut2={() => {
                        MouseOut();
                    }}
                    onClick2={() => {
                        history.push('/Pano2');
                    }}

                    onMouseOver3={() => {
                        MouseOver(Images[2].src);
                    }}
                    onMouseOut3={() => {
                        MouseOut();
                    }}
                    onClick3={() => {
                        history.push('/Pano4');
                    }}
                    onMouseOver4={() => {
                        MouseOver(Images[3].src);
                    }}
                    onMouseOut4={() => {
                        MouseOut();
                    }}
                    onClick4={() => {
                        history.push('/Pano5')
                    }}
                    onMouseOver5={() => {
                        MouseOver(Images[4].src);
                    }}
                    onMouseOut5={() => {
                        MouseOut();
                    }}
                    onClick5={() => {
                        history.push('/Pano3');
                    }}
                    onMouseOver6={() => {
                        MouseOver(Images[5].src);
                    }}
                    onMouseOut6={() => {
                        MouseOut();
                    }}
                    onClick6={() => {
                        SetSecOne(!secOne)
                    }}
                    onMouseOver7={() => {
                        MouseOver(Images[6].src);
                    }}
                    onMouseOut7={() => {
                        MouseOut();
                    }}
                    onClick7={() => {
                        SetSecTwo(!secTwo)
                    }}
                    onMouseOver8={() => {
                        MouseOver(Images[7].src);
                    }}
                    onMouseOut8={() => {
                        MouseOut();
                    }}
                    onClick8={() => {
                        SetSecThree(!secThree)
                    }}
                    onMouseOver9={() => {
                        MouseOver(Images[8].src);
                    }}
                    onMouseOut9={() => {
                        MouseOut();
                    }}
                    onClick9={() => {
                        SetSecFour(!secFour)
                    }}
                    onMouseOver10={() => {
                        MouseOver(Images[9].src); //10
                    }}
                    onMouseOut10={() => {
                        MouseOut();
                    }}
                    onClick10={() => {
                        SetSecFive(!secFive)
                    }}




                    onMouseOver11={() => {
                        MouseOverSec(Images[15].src); //sixteen
                    }}
                    onMouseOut11={() => {
                        MouseOut();
                    }}
                    onClick11={() => {
                        SetSecSix(!secSix);
                    }}
                    onMouseOver12={() => {
                        MouseOverSec(Images[16].src);
                    }}
                    onMouseOut12={() => {
                        MouseOut();
                    }}
                    onClick12={() => {
                        SetSecSeven(!secSeven);
                    }}
                    onMouseOver13={() => {
                        MouseOverSec(Images[17].src);
                    }}
                    onMouseOut13={() => {
                        MouseOut();
                    }}
                    onClick13={() => {
                        SetSecEight(!secEight);
                    }}
                    onMouseOver14={() => {
                        MouseOverSec(Images[18].src);
                    }}
                    onMouseOut14={() => {
                        MouseOut();
                    }}
                    onClick14={() => {
                        SetSecNine(!secNine);
                    }}
                    onMouseOver15={() => {
                        MouseOverSec(Images[19].src);
                    }}
                    onMouseOut15={() => {
                        MouseOut();
                    }}
                    onClick15={() => {
                        SetSecTen(!secTen);
                    }}
                    onMouseOver16={() => {
                        MouseOverSec(Images[20].src);
                    }}
                    onMouseOut16={() => {
                        MouseOut();
                    }}
                    onClick16={() => {
                        SetSecEleven(!secEleven);
                    }}
                    onMouseOver17={() => {
                        MouseOverSec(Images[21].src);
                    }}
                    onMouseOut17={() => {
                        MouseOut();
                    }}
                    onClick17={() => {
                        SetSecTwelve(!secTwelve);
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

                    onMouseOverSlides={() => {
                    }}
                    onMouseOutSlides={() => {
                    }}
                    onClickSlides={() => {
                        SetPresentation(!Presentation);
                    }}

                    onMouseOverArcade={() => {
                        MouseOver(Images[29].src);
                    }}
                    onMouseOutArcade={() => {
                        MouseOut();
                    }}
                    onClickArcade={() => {
                        SetSecArcade(Images[30].src)
                    }}
                />




            </div>

        </div>
    </div>)
}

export default MainPage;