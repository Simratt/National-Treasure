import './box.css'
import React from 'react'

function Box(props) {
    const data = [];
    for(const e in props){
        data.push(props[e])
    }
    return (
        <div className='boardElement'>
            <div>{data[0][0]}</div>
            <div id="spacer"></div>
            <div>score: {data[0][1]}</div>
        </div>
    )
}
export default Box;
