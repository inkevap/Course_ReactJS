import React, { useState } from 'react';


const ChangingComponent = () => {

    const [boxStyle, setBoxStyle] = useState({
        height: '255px',
        width: '255px',
        backgroundColor: 'black'
    })

    let rgb = {
        r: 0,
        g: 0,
        b: 0
    }

    const [timer, setTimer] = useState(0);

    const color = () => {
        rgb = {
            r: Math.floor(Math.random() * 256),
            g: Math.floor(Math.random() * 256),
            b: Math.floor(Math.random() * 256)
        }

        setBoxStyle({
            ...boxStyle,
            backgroundColor: `rgb(${rgb.r},${rgb.g},${rgb.b})`
        })
    }


    const ChangingColor = () => {
        return setTimer(setInterval(color, 500));
    };

    const StopChanging = () => {
        return clearInterval(timer);
    };

    return (
        <div
            style={boxStyle}
            onMouseOver={ChangingColor}
            onMouseLeave={StopChanging}
            onDoubleClick={StopChanging}
        >
      {boxStyle.backgroundColor}
        </div>
    );
}

export default ChangingComponent;
