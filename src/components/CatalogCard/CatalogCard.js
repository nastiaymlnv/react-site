import React from "react";
import "./CatalogCard.css";
import {ReactComponent as FullStarIcon} from "../../img/full-star.svg";
import {ReactComponent as ScalesIcon} from "../../img/compare-icon.svg";
import {ReactComponent as HeartIcon} from "../../img/like-icon_yellow.svg";

export default class CatalogCard extends React.Component {
    render() {
        return(
            <article className="card">
                <span className="card_discount card_discount__avaliable">
                    -50%
                </span>
                <div className="card_photo-wrapper">
                    <img className="card_photo" src={require("../../img/nano_X1.jpg")}
                    alt="Rebook Nano X1 Adventure Women`s Shoes" />
                </div>
                <div className="card_description">
                    <p className="card_title">
                        Rebook Nano X1 Adventure W
                    </p>
                    <div className="card_about">
                        <p className="card_about-line">
                            Crossfit
                        </p>
                        <p className="Card_about-material">
                            Floatride Energy Foam
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
                            12 reviews
                        </p>
                    </div>
                    <div className="card_action-panel">
                        <p className="card_price">
                            $135
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
}