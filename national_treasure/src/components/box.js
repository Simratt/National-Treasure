import './box.css'
import React from 'react'

function Box(props) {
    return (
        <p id='boardItem'>{props.text}</p>
    )
}

export default Box;
