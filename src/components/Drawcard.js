import React, { useState } from 'react'
import './Drawcard.css'

export default function Drawcard(props) {
    const [opendrow, setOpendrow] = useState(false)
    const handelClick = () => {
        setOpendrow(!opendrow)
    }

    return (
        <div>
            {props.children}
            <button class="dropdown-btn" onClick={handelClick}>
                <i
                    class={`fa fa-angle-${opendrow ? 'up' : 'down'}`}
                    style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "2%" }}
                />
                {props.text}
            </button>
            {opendrow && (
                <div class="dropdown-container">
                    {props.p}
                </div>
            )}


        </div>
    )
}


