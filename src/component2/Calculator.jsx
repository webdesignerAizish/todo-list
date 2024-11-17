
import ButtonContainer from './ButtonContainer'
import css from './Calculator.module.css'
import Input from './Input'
import { useState } from 'react';
function Calculator() {
    let [calVal, setCalVal] = useState("");
    const onButtonClick = (buttonText) => {

        if (buttonText === "C") {
            setCalVal("");
        } else if (buttonText === "=") {
            const result = eval(calVal);
            setCalVal(result);
        } else {
            const newValue = calVal + buttonText;
            setCalVal(newValue);
        }
    }
    return (
        <div>
            <div className={css.calculator}>
                <Input answer={calVal}></Input>
                <ButtonContainer onButtonClick={onButtonClick} />
            </div>
        </div>
    )
}

export default Calculator
