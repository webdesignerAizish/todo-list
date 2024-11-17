import React, { useState } from 'react'
import css from "./AddItem.module.css"
function AddItem({ onNewItem }) {
    const [todoName, setTodoItems] = useState();
    const [dueDate, setDueDate] = useState();
    return (
        <div>
            <div className="container text-center">

                <div className="row">
                    <div className="col-4">
                        <input className={css["input"]} type="text" placeholder="Enter your task here" />
                    </div>
                    <div className="col-4">
                        <input className={css["input"]} type="date" />
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn px-4 btn-success" onClick={() => onNewItem('a', 'b')}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItem
