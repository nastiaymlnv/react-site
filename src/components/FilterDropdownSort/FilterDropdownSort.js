import React from "react";

const FilterDropdownSort = ({options = [], onSelect, selectedIndex}) => {
    return <select onChange={(e) => {onSelect(e.target.value); console.log(e)}}>
        {options.map(({name, id}, index) => <option key={id} id={id} selected={selectedIndex === index} value={index}>
                {name}
            </option>
        )}
    </select>
};

export default FilterDropdownSort;