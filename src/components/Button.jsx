import React from 'react'
import './button.css'

export default props =>
    <button
        className={`
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}`
        }

        onClick={e => props.click && props.click(e.target.innerHTML)}
    >
        {props.label}
    </button>