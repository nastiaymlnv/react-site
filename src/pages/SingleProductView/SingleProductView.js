import React from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header/Header";

import "./SingleProductView.css";

export default function SingleProductView() {
    let params = useParams();

    return(
        <>
            <Header />
            <h1> This is single page view of product with id: {params.id}</h1>
        </>
    )
}