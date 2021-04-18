import React from 'react';
import './pages.css';
import Buttons from './Buttons';
import { useHistory } from 'react-router-dom'

const Program = () => {

    const history = useHistory();

    return (<div className="program">
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

export default Program;