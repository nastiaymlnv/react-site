import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useStore } from 'react-redux';

import { store } from "../../store";

import {ReactComponent as AccountIcon} from "../../assets/img/account-icon.svg";
import {ReactComponent as Logo} from "../../assets/img/reebok-logo.svg";
import {ReactComponent as SearchIcon} from "../../assets/img/search-icon.svg";
import {ReactComponent as LocationIcon} from "../../assets/img/location-icon.svg";
import {ReactComponent as Heart} from "../../assets/img/like-icon_black.svg";
import {ReactComponent as Arrow} from "../../assets/img/open-arrow.svg";
import {ReactComponent as CourtIcon} from "../../assets/img/court-icon.svg";

import "./Header.css";

export default function Header () {
    const store = useStore();
    const storage = useSelector(state => state.cart);

    const calcTotalInHeader = () => {
        const summary = storage.reduce((prevVal, currVal) => {
            prevVal[0] += currVal.amount;
            prevVal[1] += currVal.amount * currVal.price;
            
            return prevVal;
        }, [0, 0]);

        return summary;
    }

    useEffect(() => {
        calcTotalInHeader();
    }, [storage])

    return (
        <header className="header">
            <nav className="nav-main-info">
                <div className="content-wrapper header-wrapper">
                    <ul className="nav-main-info_list">
                        <li className="nav-main-info_list-item">
                            <Link to={'/'} className="header-link">
                                About us
                            </Link>
                        </li>
                        <li className="nav-main-info_list-item">
                            <Link to={'/'} className="header-link">
                                Payment and delivery
                            </Link>
                        </li>
                        <li className="nav-main-info_list-item">
                            <Link to={'/'} className="header-link">
                                News
                            </Link>
                        </li>
                        <li className="nav-main-info_list-item">
                            <Link to={'/'} className="header-link">
                                Contacts
                            </Link>
                        </li>
                    </ul>
                    <div className="personal-account">
                        <AccountIcon className="personal-account_icon"/>
                            <p className="personal-account_link">
                                <Link to={'/'} className="header-link">
                                    Personal account
                                </Link>
                            </p>
                    </div>
                </div>
            </nav>
            <article className="hero">
                <div className="hero-wrapper">
                    <div className="logo-wrapper">
                        <Link to={'/'} className="hero_logo-link">
                            <Logo className="hero_logo" />
                        </Link>
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
                                        <Link to={'/'} className="link">
                                            Call me
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="hero-info_item">
                            <Heart className="like-icon"/>
                        </li>
                        <li className="hero-info_item cart">
                            <span className="cart_icon-wrapper">
                                <Link to={'/cart'} className="link">
                                    <CourtIcon className="cart-icon" />
                                </Link>
                                <span className="cart_popup-counter">
                                    {calcTotalInHeader()[0]}
                                </span>
                            </span>
                            <div className="cart_details">
                                <p className="cart_price">
                                    {calcTotalInHeader()[1]}$
                                </p>
                                <p className="cart_order">
                                    <Link to={'/cart'} className="link">
                                        Make order
                                    </Link>
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
                            <Link to={'/'} className="header-link">
                                Shoes
                            </Link>
                        </li>
                        <li className="nav-categories-list_item">
                            <Link to={'/'} className="header-link">
                                Clothing
                            </Link>
                        </li>
                        <li className="nav-categories-list_item">
                            <Link to={'/'} className="header-link">
                                Accessories
                            </Link>
                        </li>
                        <li className="nav-categories-list_item">
                            <Link to={'/'} className="header-link">
                                Collections
                            </Link>
                        </li>
                        <li className="nav-categories-list_item">
                            <Link to={'/'} className="header-link">
                                New & Trending
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}