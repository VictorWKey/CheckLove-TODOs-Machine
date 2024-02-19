import React from 'react'
import {ReactComponent as CheckSVG} from "./check.svg" 
import {ReactComponent as DeleteSVG} from "./delete.svg" 
import "./TodoIcon.css"

const iconTypes = {
    "check": (color) => <CheckSVG fill={color} className='Icon-svg'/>,
    "delete": (color) => <DeleteSVG fill={color} className='Icon-svg'/>
}

function TodoIcon({type, color, onClick}) {
  return (
    <span className={`Icon Icon-container-${type}`} onClick={onClick}>
        {iconTypes[type](color)}
    </span>
  )
}

export {
    TodoIcon
}