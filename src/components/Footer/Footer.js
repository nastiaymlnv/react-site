import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="content-wrapper footer-wrapper">
                <ul className="footer-list">
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Info
                        </Link>
                    </li>
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Item
                        </Link>
                    </li>
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Item
                        </Link>
                    </li>
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Item
                        </Link>
                    </li>
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Item
                        </Link>
                    </li>
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Item
                        </Link>
                    </li>
                </ul>
                <ul className="footer-list">
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Support
                        </Link>
                    </li>
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Item
                        </Link>
                    </li>
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Item
                        </Link>
                    </li>
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Item
                        </Link>
                    </li>
                </ul>
                <ul className="footer-list">
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            More
                        </Link>
                    </li>
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Item
                        </Link>
                    </li>
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Item
                        </Link>
                    </li>
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Item
                        </Link>
                    </li>
                </ul>
                <ul className="footer-list">
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Personal account
                        </Link>
                    </li>
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Item
                        </Link>
                    </li>
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Item
                        </Link>
                    </li>
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Item
                        </Link>
                    </li>
                    <li className="footer-list_item">
                        <Link to="/" className="footer-list_link link">
                            Item
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}