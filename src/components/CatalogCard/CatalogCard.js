import React from "react";
import { Link } from "react-router-dom";

import {ReactComponent as FullStarIcon} from "../../img/full-star.svg";
import {ReactComponent as ScalesIcon} from "../../img/compare-icon.svg";
import {ReactComponent as HeartIcon} from "../../img/like-icon_yellow.svg";

import "./CatalogCard.css";

export default function CatalogCard(props) {
    const {id, productName, line, material, reviews, price, discount} = props.value;

    const discountChecker = (item) => {
        if(item !== 0) {
            return (
                <span className="card_discount card_discount__avaliable">
                    -{item}%
                </span>
            )
        } else {
            return (
                <span className="card_discount">
                </span>
            )
        }
    }

    return(
        <article className="card">
            {discountChecker(discount)}
            <div className="card_photo-wrapper">
                <img className="card_photo" src={require("../../img/nano_X1.jpg")}
                alt={productName} />
            </div>
            <div className="card_description">
                <Link to={'/single-view/' + id} className="card_title_link">
                    <p className="card_title">
                        {productName}
                    </p>
                </Link>
                <div className="card_about">
                    <p className="card_about-line">
                        {line}
                    </p>
                    <p className="Card_about-material">
                        {material}
                    </p>
                </div>
                <div className="card_reviews">
                    <div className="card_reviews-rating">
                        <FullStarIcon className="star-icon"/>
                        <FullStarIcon className="star-icon"/>
                        <FullStarIcon className="star-icon"/>
                        <FullStarIcon className="star-icon"/>
                        <FullStarIcon className="star-icon"/>
                    </div>
                    <p className="card_reviews-amount">
                        {reviews} reviews
                    </p>
                </div>
                <div className="card_action-panel">
                    <p className="card_price">
                        ${price}
                    </p>
                    <div className="card_compare-like">
                        <ScalesIcon className="compare-icon"/>
                        <HeartIcon className="like-icon"/>
                    </div>
                </div>
            </div>
        </article>
    )
}