import React, { useState, useRef, useEffect, useImperativeHandle } from 'react';
import './pages.css';
import ImageOne from '../textures/svgs/redLettering_01.svg';
import ImageTwo from '../textures/svgs/redLettering_02.svg';
import ImageThree from '../textures/svgs/redLettering_03.svg';
import { useHistory } from 'react-router-dom';
import SectionOneButton from './comps/Buttons/SectionOneButton';
import Button1 from '../textures/svgs/button1';
import Button2 from '../textures/svgs/button2';
import Button3 from '../textures/svgs/button3';
import Buttons from '../textures/svgs/Buttons';
import SectionView from './comps/SectionView/SectionView';
import SectionOne from '../textures/sections/longsection_bite-01.jpg';


const MainPage = (props) => {

    let [Info, setInfo] = useState({});

    const [sectionView, SetSectionView] = useState(false);

    const infoOpacity = .75;

    const history = useHistory();

    //const secView = SectionView();

    //console.log(secView.props.imageVisible)


    const imageCallback = (index) => {
        console.log(index);
        SetSectionView(index);
    }

    return (<div className="main">;



      
        <button style={{ opacity: 0, position: 'absolute', zIndex: 1000000, height: 50, width: 50, left: '15%', top: '49%' }} onClick={() => {
            SetSectionView(sectionView => !sectionView);
        }}></button>


        {sectionView && <SectionView imageCallback={imageCallback} image={SectionOne} />}


        <div className="plan">

            <div style={Info} className="info">


                <Buttons onMouseOver1={() => {
                    setInfo({
                        backgroundImage: `url(${ImageOne})`,
                        opacity: infoOpacity,
                    })
                }}
                    onMouseOut1={() => {
                        setInfo({

                        })
                    }}
                    onClick1={() => {
                        history.push('/Pano1');
                    }}
                    onMouseOver2={() => {
                        setInfo({
                            backgroundImage: `url(${ImageTwo})`,
                            opacity: infoOpacity,
                        })
                    }}
                    onMouseOut2={() => {
                        setInfo({

                        })
                    }}
                    onClick2={() => {
                        history.push('/Pano2');
                    }}
                    onMouseOver3={() => {
                        setInfo({
                            backgroundImage: `url(${ImageThree})`,
                            opacity: infoOpacity,
                        })
                    }}
                    onMouseOut3={() => {
                        setInfo({

                        })
                    }}
                    onClick3={() => {
                        history.push('/Pano3');
                    }}
                />




            </div>

        </div>
    </div>);
}

export default MainPage;