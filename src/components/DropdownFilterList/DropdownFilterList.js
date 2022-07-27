import React, {useState} from "react";
import { useRef } from "react";

import {ReactComponent as Arrow} from "../../assets/img/open-arrow.svg";

import "./DropdownFilterList.css";

export default function DropdownFilterList({value, filterByCountry}) {
    const arrayItems = value;
    const [open, setOpen] = useState(true);
    let ref = useRef();

    return(
        <article className="dropdown">
            <div className="dropdown_title-wrapper" onClick={() => setOpen(!open)}>
                <h2 className="dropdown_title">
                    {arrayItems[0].title}
                </h2>
                <Arrow className={open ? "dropdown_arrow dropdown_arrow__change" : "dropdown_arrow"}/>
            </div>
            <ul className={open ? "dropdown_list" : "dropdown_list dropdown_list__change"}>
                {arrayItems.map(item => {
                    return (
                        <li key={item.id} className="dropdown_list-item">
                            <label className="dropdown_list-label">
                                <input ref={ref} id={item.id} type="checkbox" className="dropdown_list-checkmark" onClick={() => {
                                    filterByCountry(item.id);
                                    }}/>
                                <span className="dropdown_list-item-name">{item.name}</span>
                                <span className="dropdown_list_quantity">
                                    ({item.quantity})
                                </span>
                            </label>
                        </li>
                        )
                    })
                }
            </ul>
        </article>
    )
}

