import React from "react";
import './PageLocationLine.css'

export default class PageLocationLine extends React.Component {
    render() {
        return(
            <article className="location-section">
                <h1 className="location-section_current">
                    Nano
                </h1>
                <ul className="location-section_prev-pages">
                    <li className="location-section_prev-pages-item">
                        <a href="#" className="location-section_prev-pages-link link">
                            Home
                        </a>
                    </li>
                    <li className="location-section_prev-pages-item">
                        <a href="#" className="location-section_prev-pages-link link">
                            Nano
                        </a>
                    </li>
                </ul>
            </article>
        )
    }
}