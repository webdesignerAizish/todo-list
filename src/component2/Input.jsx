import css from './Calculator.module.css'

function Input({ answer }) {
    return (
        <div>
            <input className={css.display} type="text" value={answer} readOnly />
        </div>
    )
}

export default Input
