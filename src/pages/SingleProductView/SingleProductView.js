import React from "react";
import { useParams } from "react-router-dom";

import Gallery from "../../components/Gallery/Gallery";
import SingleProductCharacteristic from "../../components/SingleProductCharacteristic/SingleProductCharacteristic";

import "./SingleProductView.css";

export default function SingleProductView() {
    let params = useParams();

    return(
        <>
            <h1 className="temporary-item-instead-history">
                This is single page view of product with id: {params.id} (Temporary header instead of the history)
            </h1>
            <div className="single-product-card content-wrapper">
                <Gallery />
                <div className="single-product-card_info">
                    <SingleProductCharacteristic/>
                </div>
            </div>
        </>
    )
}