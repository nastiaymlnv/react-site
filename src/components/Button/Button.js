import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

export default function Button(props) {
    return(
        <Link to="/" className="btn-link link">
            <div className="btn">
                {props.children}
            </div>
        </Link>
    )
}