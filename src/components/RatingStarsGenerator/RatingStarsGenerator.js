import React from "react";
import {ReactComponent as FullStarIcon} from "../../assets/img/full-star.svg";

import "./RatingStarsGenerator.css";

const RatingStarsGenerator = ({rating}) => {
    let starsAmountArr = [];

    for (let i = 0; i < rating; i++){
        starsAmountArr.push(<FullStarIcon className="star-icon"/>)
    }

    return <div className="rating">
        {starsAmountArr}
    </div>
}

export default RatingStarsGenerator;