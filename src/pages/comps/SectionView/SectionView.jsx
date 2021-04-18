import React, { useEffect, useState } from 'react';
import '../style/comps.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import MainPage from '../../MainPage'


const SectionView = ({ image, ifra, imageCallback }) => {

    const [imageVisible, SetImageVisible] = useState(true);




    return (<div>
        {imageVisible &&
            <div className='section-view'>

                <div className='close-section-view'>
                    <a onClick={() => {
                        SetImageVisible(false);
                        imageCallback(false);
                    }}><AiOutlineCloseCircle color="#ffffff" /></a>
                </div>


                {ifra ? <iframe src={ifra} className='sectionViewIframe' /> : <img src={image} className='sectionViewImage' />}


            </div>
        }
    </div>)


}

export default SectionView;