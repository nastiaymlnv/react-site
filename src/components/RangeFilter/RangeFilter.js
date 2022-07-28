import React, {useRef, useEffect, useState} from "react";

import {ReactComponent as Arrow} from "../../assets/img/open-arrow.svg";

import "./RangeFilter.css";

export default function RangeFilter({min=50, max=200}) {
    const [open, setOpen] = useState(true);

    const firstThumbRef = useRef();
    const secondThumbRef = useRef();
    const slider = useRef();

    const [firstThumb, setFirstThumb] = useState(min);
    const [secondThumb, setSecondThumb] = useState(max);
    const firstThumbPositionRef = useRef(min);
    const secondThumbPositionRef = useRef(max);

    useEffect(() => {
        firstThumbRef.current.ondragstart = function() {
            return false;
        };

        secondThumbRef.current.ondragstart = function() {
            return false;
        };

        const changePosition = (e) => {
            const target = e.target;

            if(target.classList.contains('thumb')) {
                const moveHandler = (e) => {
                    if(e.pageX > slider.current.getBoundingClientRect().left && e.pageX < slider.current.getBoundingClientRect().right) {
                        const thumbOffset = e.clientX - slider.current.getBoundingClientRect().left;

                        if (firstThumbRef.current === target && thumbOffset < secondThumbPositionRef.current) {
                            setFirstThumb(thumbOffset);
                        }

                        if (secondThumbRef.current === target && thumbOffset > firstThumbPositionRef.current) {
                            setSecondThumb(thumbOffset);
                        }
                    }
                }

                document.addEventListener('mousemove', moveHandler);

                document.addEventListener('mouseup', () => {
                    document.removeEventListener('mousemove', moveHandler);
                }, {once: true});
            }
        }

        document.addEventListener('mousedown', changePosition);

        return () => {
            document.removeEventListener('mousedown', changePosition);
        }

    }, []);

    useEffect(() => {
        firstThumbRef.current.style.left = firstThumb + 'px';
        firstThumbPositionRef.current = firstThumb;
    }, [firstThumb]);

    useEffect(() => {
        secondThumbRef.current.style.left = secondThumb + 'px';
        secondThumbPositionRef.current = secondThumb;
    }, [secondThumb]);

    return(
        <article className="range">
            <div className="range_title-wrapper" onClick={() => setOpen(!open)}>
                <h2 className="range_title">
                    Price
                </h2>
                <Arrow className={open ? "range_arrow range_arrow__change" : "range_arrow"}/>
            </div>
            <div className={open ? "range_body" : "range_body range_body__hidden"}>
                <div className="range_scope">
                    <input className="range_scope-item range_scope__min"
                        value={Math.round(firstThumb)}
                        onChange={(event) => setFirstThumb(Number(event.target.value))}
                    />
                    <input className="range_scope-item range_scope__max"
                        value={Math.round(secondThumb)}
                        onChange={(event) => setSecondThumb(Number(event.target.value))}
                    />
                </div>
                <div ref={slider} className="slider">
                    <div ref={firstThumbRef} className="thumb"></div>
                    <div ref={secondThumbRef} className="thumb"></div>
                </div>
            </div>
        </article>
    )
}