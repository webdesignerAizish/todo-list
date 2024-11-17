import React from 'react'

import css from './Button.module.css'
function ButtonContainer({ onButtonClick }) {
    const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
    return (
        <div>
            <div className={css.buttonContainer}>
                {buttonNames.map(buttonNames => (<button className={css.button} onClick={() => onButtonClick(buttonNames)}>{buttonNames}</button>))}
            </div>
        </div>
    )
}

export default ButtonContainer
