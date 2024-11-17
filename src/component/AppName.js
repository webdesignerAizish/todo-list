import React from 'react'
import css from "./AppName.module.css"
function AppName({ title }) {
    const heading = {
        fontSize: "100px",
        color: "pink"
    }
    return (
        <div>
            <h1 className={`${css["h-1"]} font-weight-bolder m-4`} style={heading}>{title}</h1>

        </div >
    )
}

export default AppName
