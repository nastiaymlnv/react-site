import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

export default function Button(props) {
    return(
        <Link to={props.link} className="btn-link link">
            <div className="buy-btn">
                {props.children}
            </div>
        </Link>
    )
}