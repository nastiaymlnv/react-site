import React from "react";
import { Link } from "react-router-dom";

import {ReactComponent as ScalesIcon} from "../../assets/img/compare-icon.svg";
import {ReactComponent as HeartIcon} from "../../assets/img/like-icon_yellow.svg";
import RatingStarsGenerator from "../RatingStarsGenerator/RatingStarsGenerator";

import "./CatalogCard.css";

export default function CatalogCard(props) {
    const {id, img, title, size, country, discount, responses, price, rating} = props.value;

    const discountChecker = (item) => {
        if(+item !== 0) {
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
                <img className="card_photo" src={img}
                alt={title} />
            </div>
            <div className="card_description">
                <Link to={'/single-view/' + id} className="card_title_link">
                    <p className="card_title">
                        {title}
                    </p>
                </Link>
                <div className="card_about">
                    <p className="card_about-line">
                        {size}
                    </p>
                    <p className="Card_about-material">
                        {country}
                    </p>
                </div>
                <div className="card_reviews">
                    <RatingStarsGenerator rating={rating} />
                    <p className="card_reviews-amount">
                        {responses} reviews
                    </p>
                </div>
                <div className="card_action-panel">
                    <p className="card_price">
                        {price} $
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