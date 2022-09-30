import React, { useState } from 'react';


const ChangingComponent = () => {

    const [boxStyle, setBoxStyle] = useState({
        height: '255px',
        width: '255px',
        backgroundColor: 'black'
    })

    const color = (val) => {

        if (val) {
            setBoxStyle({
                ...boxStyle,
                backgroundColor: `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
            })
        } else {
            setBoxStyle({
                ...boxStyle,
                backgroundColor: 'black'
            })
        }
    }

    return (
        <div
            style={boxStyle}
            onMouseOver={() => color(true)}
            onMouseLeave={() => color(false)}
            onDoubleClick={() => color(false)}
        >
        </div>
    );
}

export default ChangingComponent;
