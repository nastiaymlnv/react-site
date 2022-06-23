import React from "react";
import { Link } from "react-router-dom";

import "./PageLocationLine.css";

export default class PageLocationLine extends React.Component {
    render() {
        return(
            <article className="location-section">
                <h1 className="location-section_current">
                    Nano
                </h1>
                <ul className="location-section_prev-pages">
                    <li className="location-section_prev-pages-item">
                        <Link to="/" className="location-section_prev-pages-link link">
                            Home
                        </Link>
                    </li>
                    <li className="location-section_prev-pages-item">
                        Nano
                    </li>
                </ul>
            </article>
        )
    }
}