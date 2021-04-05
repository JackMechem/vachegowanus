import React from 'react';
import Button1 from '../../textures/svgs/button1'

const Info = (props) => {


    return (<div>
        <Button1 onMouseOver={<h1>ok</h1>}
            onMouseOut={() => {
                setInfo({

                })
            }}
            onClick={() => {
                history.push('/Pano1');
            }}
        >
        </Button1>
    </div>)
}

export default Info;