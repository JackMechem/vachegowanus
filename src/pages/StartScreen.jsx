import React, { useState } from 'react';
import { GiCartwheel } from 'react-icons/gi';
import './pages.css'

const StartScreen = ({ history }) => {

    const [loading, SetLoading] = useState('loading');

    setTimeout(() => {
        history.push('/Home')
    }, 2000)

    return (
        <div className='start'>
            <h1>Loading</h1>
            <div className='loading'>
                <GiCartwheel />
            </div>
        </div>
    )
}

export default StartScreen;
