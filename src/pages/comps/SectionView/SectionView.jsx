import React, { useEffect, useState } from 'react';
import '../style/comps.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import MainPage from '../../MainPage'


const SectionView = ({image, imageCallback}) => {

    const [imageVisible, SetImageVisible] = useState(true);

    


    return (<div>
        {imageVisible &&
            <div className='section-view'>

                <div className='close-section-view'>
                    <a onClick={() => {
                        SetImageVisible(false);
                        imageCallback(false);
                    }}><AiOutlineCloseCircle /></a>
                </div>

                <img src={image} className='sectionViewImage' />


            </div>
        }
    </div>)


}

export default SectionView;