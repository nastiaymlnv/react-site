import React from "react";

import {ReactComponent as AccountIcon} from "../../img/account-icon.svg";
import {ReactComponent as Logo} from "../../img/reebok-logo.svg";
import {ReactComponent as SearchIcon} from "../../img/search-icon.svg";
import {ReactComponent as LocationIcon} from "../../img/location-icon.svg";
import {ReactComponent as Heart} from "../../img/like-icon_black.svg";
import {ReactComponent as Arrow} from "../../img/open-arrow.svg";
import {ReactComponent as CourtIcon} from "../../img/court-icon.svg";

import "./Header.css";

export default class Header extends React.Component {
    render() {
        return(
            <header className="header">
                <nav className="nav-main-info">
                    <div className="content-wrapper header-wrapper">
                        <ul className="nav-main-info_list">
                            <li className="nav-main-info_list-item">
                                <a href='#' className="header-link">
                                    About us
                                </a>
                            </li>
                            <li className="nav-main-info_list-item">
                                <a href='#' className="header-link">
                                    Payment and delivery
                                </a>
                            </li>
                            <li className="nav-main-info_list-item">
                                <a href='#' className="header-link">
                                    News
                                </a>
                            </li>
                            <li className="nav-main-info_list-item">
                                <a href='#' className="header-link">
                                    Contacts
                                </a>
                            </li>
                        </ul>
                        <div className="personal-account">
                            <AccountIcon className="personal-account_icon"/>
                                <p className="personal-account_link">
                                    <a href='#' className="header-link">
                                        Personal account
                                    </a>
                                </p>
                        </div>
                    </div>
                </nav>
                <article className="hero">
                    <div className="hero-wrapper">
                        <div className="logo-wrapper">
                            <a href="/" className="hero_logo-link">
                                <Logo className="hero_logo" />
                            </a>
                        </div>
                        <span className="hero_search-wrapper">
                            <SearchIcon className="hero_search-icon"/>
                            <input className="hero_search" placeholder="Search"></input>
                        </span>
                        <ul className="hero-info">
                            <li className="hero-info_item">
                                <div className="hero-info_contacts">
                                    <div className="hero-info_location">
                                        <LocationIcon className="hero-info_location-icon" />
                                        <p className="hero-info_location-place">
                                            Ukraine
                                        </p>
                                    </div>
                                    <div className="hero-info_phone">
                                        <span className="hero-info_phone-number">
                                            (380)123-456-789
                                            <Arrow className="arrow-more" />
                                        </span>
                                        <p className="hero-info_call">
                                            <a href="#" className="link">
                                                Call me
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="hero-info_item">
                                <Heart className="like-icon"/>
                            </li>
                            <li className="hero-info_item cart">
                                <span className="cart_icon-wrapper">
                                    <a href="#" className="link">
                                        <CourtIcon className="cart-icon" />
                                    </a>
                                </span>
                                <div className="cart_details">
                                    <p className="cart_price">
                                        0 uah
                                    </p>
                                    <p className="cart_order">
                                        <a href="#" className="link">
                                            Make order
                                        </a>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </article>
                <nav className="nav-categories">
                    <div className="content-wrapper header-wrapper">
                        <ul className="nav-categories-list">
                            <li className="nav-categories-list_item">
                                <a href="#" className="header-link">
                                    Shoes
                                </a>
                            </li>
                            <li className="nav-categories-list_item">
                                <a href="#" className="header-link">
                                    Clothing
                                </a>
                            </li>
                            <li className="nav-categories-list_item">
                                <a href="#" className="header-link">
                                    Accessories
                                </a>
                            </li>
                            <li className="nav-categories-list_item">
                                <a href="#" className="header-link">
                                    Collections
                                </a>
                            </li>
                            <li className="nav-categories-list_item">
                                <a href="#" className="header-link">
                                    New & Trending
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}