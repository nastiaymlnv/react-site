import React, {useState} from "react";
import './DropdownFilterList.css';
import {ReactComponent as Arrow} from "../../img/open-arrow.svg";

export default function DropdownFilterList(props) {
    const arrayItems = props.value;
    const [open, setOpen] = useState(true);

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
                                <input type="checkbox" className="dropdown_list-checkmark" />
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

