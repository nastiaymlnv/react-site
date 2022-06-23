import React, {useState} from "react";

import {ReactComponent as Arrow} from "../../img/open-arrow.svg";

import "./RangeFilter.css";

export default function RangeFilter() {
    const [open, setOpen] = useState(true);

    return(
        <article className="range">
            <div className="range_title-wrapper" onClick={() => setOpen(!open)}>
                <h2 className="range_title">
                    Price
                </h2>
                <Arrow className={open ? "range_arrow range_arrow__change" : "range_arrow"}/>
            </div>
            <div className={open ? "range_body" : "range_body range_body__hidden"}>
                <div className="range_scope">
                    <span className="range_scope-item range_scope__min">50$</span>
                    <span className="range_scope-item range_scope__max">250$</span>
                </div>
                <input className="range_slider" type="range" min="0" max="300"></input>
            </div>
        </article>
    )
}