import React from "react";

import "./Gallery.css"

export default function Gallery() {
    const ref = React.createRef();

    const changeImage = (e) => { ref.current.src = e.target.src; }

    return (
        <article className="gallery">
            <div className="gallery_main-photo-wrapper">
                <img ref={ref} className="gallery_main-photo" src={require("../../assets/img/nano_X1.jpg")}
                alt="" />
            </div>
            <div className="gallery_child-photo-wrapper" onClick={changeImage}>
                <img className="gallery_child-photo" src={require("../../assets/img/nano_X1.jpg")}
                alt="" />
            </div>
            <div className="gallery_child-photo-wrapper" onClick={changeImage}>
                <img className="gallery_child-photo" src={require("../../assets/img/nano_X1-2.jpg")}
                alt="" />
            </div>
            <div className="gallery_child-photo-wrapper" onClick={changeImage}>
                <img className="gallery_child-photo" src={require("../../assets/img/nano_X1-3.jpg")}
                alt="" />
            </div>
            <div className="gallery_child-photo-wrapper" onClick={changeImage}>
                <img className="gallery_child-photo" src={require("../../assets/img/nano_X1-4.jpg")}
                alt="" />
            </div>
        </article>
    )
}