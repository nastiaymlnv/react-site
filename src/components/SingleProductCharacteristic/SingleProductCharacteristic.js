import React, { useEffect, useState } from "react";

import UserDropdown from "../UserDropdown/UserDropdown";
import {ReactComponent as ScalesIcon} from "../../assets/img/compare-icon.svg";
import {ReactComponent as HeartIcon} from "../../assets/img/like-icon_yellow.svg";
import {ReactComponent as CartIcon} from "../../assets/img/cart-icon_white.svg";
import RatingStarsGenerator from "../../RatingStarsGenerator";
import Button from "../Button/Button";

import "./SingleProductCharacteristic.css";

export default function SingleProductCharacteristic() {
    let rating = 5;
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter < 0) {
            setCounter(0);
        }
    })

    return (
        <article className="product-description">
            <div className="product-description-title">
                <div className="product-description-title_text">
                    <div className="product-description-title_name-wrapper">
                        <span className="product-description-title_name">
                            Name
                        </span>
                        { RatingStarsGenerator(rating) }
                    </div>
                    <div className="card_compare-like">
                        <ScalesIcon className="compare-icon"/>
                        <HeartIcon className="like-icon"/>
                    </div>
                </div>
                <div className="product-accesibility">
                    Avaliable
                </div>
            </div>
            <div className="product-description-details">
                <ul className="product-description-details-title-list">
                    <li className="product-description-details-title-list_item">
                        Article:
                    </li>
                    <li className="product-description-details-title-list_item">
                        Trademark:
                    </li>
                    <li className="product-description-details-title-list_item">
                        Series:
                    </li>
                    <li className="product-description-details-title-list_item">
                        Bonus points:
                    </li>
                </ul>
                <ul className="product-description-details-info-list">
                    <li className="product-description-details-info-list_item">
                        AF0000001952
                    </li>
                    <li className="product-description-details-info-list_item">
                        WUESTHOF (Germany)
                    </li>
                    <li className="product-description-details-info-list_item">
                        Nano X1
                    </li>
                    <li className="product-description-details-info-list_item">
                        38
                    </li>
                </ul>
            </div>
            <div className="product-description-select-options">
                <ul className="product-description-select-options-title-list">
                    <li className="product-description-select-options-title-list_item">
                        Steel
                    </li>
                    <li className="product-description-select-options-title-list_item">
                        Handle
                    </li>
                    <li className="product-description-select-options-title-list_item">
                        Guard and back
                    </li>
                    <li className="product-description-select-options-title-list_item">
                        Blade processing
                    </li>
                </ul>
                <ul className="product-description-select-options-info-list">
                    <li className="product-description-select-options-info-list_item">
                        <UserDropdown />
                    </li>
                    <li className="product-description-select-options-info-list_item">
                        <UserDropdown />
                    </li>
                    <li className="product-description-select-options-info-list_item">
                        <UserDropdown />
                    </li>
                    <li className="product-description-select-options-info-list_item">
                        <UserDropdown />
                    </li>
                </ul>
            </div>
            <div className="product-description-buy">
                <div className="product-description-price-wrapper">
                    <span className="product-description-price">
                        100 $
                    </span>
                    <div className="product-description-price-bonuses-wrapper">
                        <span className="product-description-price-bonuses">
                            +499 points for the purchase
                        </span>
                        <div className="product-description-price-hint">
                            <span> ? </span>
                        </div>
                    </div>
                </div>
                <div className="buy-section">
                    <div className="product-counter">
                        <span className="decrease-btn" onClick={() => setCounter(counter - 1)} >
                            -
                        </span>
                        <span className="display-counter">
                            {counter}
                        </span>
                        <span className="increase-btn" onClick={() => setCounter(counter + 1)} >
                            +
                        </span>
                    </div>
                    <span className="add-btn">
                        <Button>
                            In cart
                            <CartIcon className="cart-icon"/>
                        </Button>
                    </span>
                    <span className="quick-buy-btn">
                        <Button> Buy in 1 click </Button>
                    </span>
                </div>

            </div>
        </article>
    )
}