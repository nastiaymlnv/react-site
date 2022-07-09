import React from "react";

import "./Gallery.css"

export default function Gallery({images}) {
    const ref = React.createRef();

    const changeImage = (e) => { ref.current.src = e.target.src; }

    return (
        <article className="gallery">
            <div key="01" className="gallery_main-photo-wrapper">
                <img ref={ref} src={images[0]} className="gallery_main-photo" alt="" />
            </div>
            {
            images.map((photo, i) =>
                <div key={i} className="gallery_child-photo-wrapper" onClick={changeImage}>
                    <img src={photo} className="gallery_child-photo" alt="" />
                </div>
            )
            }
        </article>
    )
}