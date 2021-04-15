import React from 'react';
import './pages.css';
import Buttons from '../textures/svgs/Buttons'
import { useHistory } from 'react-router-dom'

const Space = () => {

    const history = useHistory();

    return (<div className="space">
        <Buttons
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
    </div>)
}

export default Space;