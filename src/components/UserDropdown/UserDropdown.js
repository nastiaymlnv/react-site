import React, { useState } from "react";

import {ReactComponent as Arrow} from "../../assets/img/open-arrow.svg";
import "./UserDropdown.css";

export default function UserDropdown({options}) {
    const [openSelect, setOpenSelect] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const changeDropdownState = () => {
        setOpenSelect(!openSelect);
    }

    const arrowState = (!openSelect) ? "select-btn" : "select-btn select-btn__open";
    const selectState = (!openSelect) ? "select-options-list" : "select-options-list select-options-list__open";
    const selectValue = (selectedOption === null) ? "select-value" : "select-value select-value__selected";

    const handleEvent = (e) => {
        setSelectedOption(e.target.innerText);
        setOpenSelect(!openSelect);
    }

    return (
        <div className="select">
            <div className="select-value-wrapper">
                <div className={selectValue}>
                    {selectedOption !== null ? selectedOption : "Select option"}
                </div>
                <div className="select-btn-wrapper" onClick={changeDropdownState}>
                    <div className={arrowState}>
                        <Arrow />
                    </div>
                </div>
            </div>
            <div className={selectState} onClick={handleEvent}>
                {options.map(item => {
                    return <p className="select-option"> {item} </p>
                })}
            </div>
        </div>
    )
}