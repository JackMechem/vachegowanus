import React, { useState } from 'react';
import './pages.css'
import ImageOne from '../files/01num.png'
import ImageTwo from '../files/02num.png'
import ImageThree from '../files/03num.png'
import { useHistory } from 'react-router-dom';
import ViewModel from './comps/modelView/ViewModel'


const MainPage = () => {

    let [Info, setInfo] = useState({});

    const infoOpacity = .75;

    const history = useHistory();


    return (<div className="main">

        
        <div className="plan">

            <div style={Info} className="info">
                
                <input type="button" onMouseOver={() => {
                    setInfo({
                        backgroundImage: `url(${ImageTwo})`,
                        opacity: infoOpacity,
                    })
                }}
                    onMouseOut={() => {
                        setInfo({

                        })
                    }}
                    onClick={() => {
                        history.push('/Pano2');
                    }}
                    className="infoButton"
                    style={{
                        margin: "32% 34.5%"
                    }}></input>

                {/*END*/}

                <input type="button"

                    onMouseOver={() => {
                        setInfo({
                            backgroundImage: `url(${ImageThree})`,
                            opacity: infoOpacity,
                        })
                    }}
                    onMouseOut={() => {
                        setInfo({

                        })
                    }}
                    onClick={() => {
                        history.push('/Pano3');
                    }}
                    className="infoButton"
                    style={{
                        margin: "29% 47.5%"
                    }}></input>

                {/*END*/}

                <input type="button"

                    onMouseOver={() => {
                        setInfo({
                            backgroundImage: `url(${ImageOne})`,
                            opacity: infoOpacity,
                        })
                    }}
                    onMouseOut={() => {
                        setInfo({

                        })
                    }}
                    onClick={() => {
                        history.push('/Pano1');
                    }}
                    className="infoButton"
                    style={{
                        margin: "31.7% 59.5%"
                    }}></input>

                {/*END*/}



                {/*END*/}
            </div>

        </div>
    </div>);
}

export default MainPage;