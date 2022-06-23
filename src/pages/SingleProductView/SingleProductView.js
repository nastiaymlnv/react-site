import React from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header/Header";

import "./SingleProductView.css";

export default function SingleProductView() {
    let params = useParams();
    const ref = React.createRef();

    const changeImage = (e) => { ref.current.src = e.target.src; }

    return(
        <>
            <Header />
            <h1 className="temporary-item-instead-history">
                This is single page view of product with id: {params.id} (Temporary header instead of the history)
            </h1>
            <article className="gallery">
                <div className="gallery_main-photo-wrapper">
                    <img ref={ref} className="gallery_main-photo" src={require("../../img/nano_X1.jpg")}
                    alt="" />
                </div>
                <div className="gallery_child-photo-wrapper" onClick={changeImage}>
                    <img className="gallery_child-photo" src={require("../../img/nano_X1.jpg")}
                    alt="" />
                </div>
                <div className="gallery_child-photo-wrapper" onClick={changeImage}>
                    <img className="gallery_child-photo" src={require("../../img/nano_X1-2.jpg")}
                    alt="" />
                </div>
                <div className="gallery_child-photo-wrapper" onClick={changeImage}>
                    <img className="gallery_child-photo" src={require("../../img/nano_X1-3.jpg")}
                    alt="" />
                </div>
                <div className="gallery_child-photo-wrapper" onClick={changeImage}>
                    <img className="gallery_child-photo" src={require("../../img/nano_X1-4.jpg")}
                    alt="" />
                </div>
            </article>
        </>
    )
}