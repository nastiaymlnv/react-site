import React from "react";

import "./Button.css";

export default function Button(props) {
    return(
        <a href="#" className="btn-link link">
            <div className="btn">
                {props.children}
            </div>
        </a>
    )
}