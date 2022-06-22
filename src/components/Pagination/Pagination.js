import React, { useState } from "react";

import {ReactComponent as Arrow} from "../../img/arrow__not-active.svg";
import {ReactComponent as ArrowHovered} from "../../img/arrow__active.svg";

import "./Pagination.css";

export default function Pagination() {
    const [hoverNext, setHoverNext] = useState(false);
    const [hoverForward, setHoverForward] = useState(false);

    return (
        <div className="pagination">
            <span onMouseOver={() => setHoverNext(true)} onMouseOut={() => setHoverNext(false)}>
                {
                    (!hoverNext && <Arrow className="pagination_arrow-back" />) ||
                    (hoverNext && <ArrowHovered className="pagination_arrow-back__hovered" />)
                }
            </span>
            <ul className="pagination_pages">
                <li className="pagination_pages-item">
                    <a href="#" className="pagination_pages-link link">
                        1
                    </a>
                </li>
                <li className="pagination_pages-item">
                    <a href="#" className="pagination_pages-link link">
                        2
                    </a>
                </li>
                <li className="pagination_pages-item">
                    <a href="#" className="pagination_pages-link link">
                        3
                    </a>
                </li>
                <li className="pagination_pages-item">
                    <a href="#" className="pagination_pages-link link">
                        ...
                    </a>
                </li>
                <li className="pagination_pages-item">
                    <a href="#" className="pagination_pages-link link">
                        15
                    </a>
                </li>
            </ul>
            <span onMouseOver={() => setHoverForward(true)} onMouseOut={() => setHoverForward(false)}>
                {
                    (!hoverForward && <Arrow className="pagination_arrow-forward" />) ||
                    (hoverForward && <ArrowHovered className="pagination_arrow-forward__hovered" />)
                }
            </span>
        </div>
    )
}