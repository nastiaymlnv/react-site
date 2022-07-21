import React, {useState, useEffect} from "react";

import { useDispatch, useSelector, useStore } from 'react-redux';

import { fetchProducts } from "../../reducers/fetchProductsReducer";

import FilterDropdownSort from "../../components/FilterDropdownSort/FilterDropdownSort";
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import PageLocationLine from "../../components/PageLocationLine/PageLocationLine";
import RangeFilter from "../../components/RangeFilter/RangeFilter";
import DropdownFilterList from "../../components/DropdownFilterList/DropdownFilterList";
import SeeMoreButton from "../../components/SeeMoreButton/SeeMoreButton";
import Pagination from "../../components/Pagination/Pagination";

import "./Catalog.css";

const dropdownListConfig = [
    {id: "1", title: "Title1", name: "1Name", quantity: 100},
    {id: "2", title: "Title1", name: "2Name", quantity: 100},
    {id: "3", title: "Title1", name: "3Name", quantity: 100},
    {id: "4", title: "Title1", name: "4Name", quantity: 100}
];

const sortingOptions = [
    {id: 1, name: 'By popularity', sortingField: 'reviews'},
    {id: 2, name: 'By price',  sortingField: 'price'},
    {id: 3, name: 'By rating',  sortingField: 'rating'},
];

export default function Catalog() {
    const [sortingIndex, setSortingIndex] = useState(0);

    const store = useStore();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/productsList');
            if (response.ok) {
                const results = await response.json();
                dispatch(fetchProducts(results));
            }
        }
        catch {
            alert('Failed to fetch');
        }
    }

    const onSelect = index => {
        setSortingIndex(index);

        const {sortingField} = sortingOptions[index];

        products([...products].sort((pr1, pr2) => {
            console.log(pr1);
            console.log(pr2);
            if(pr1[sortingField] > pr2[sortingField]) {
                return 1;
            } else if(pr1[sortingField] < pr2[sortingField]) {
                return -1;
            }

            return 0;
            })
        )
    }

    return(
        <>
            <PageLocationLine />
            <div className="content-wrapper multiview-page">
                <aside className="aside">
                    <h2 className="aside-title">
                        Filters
                    </h2>
                    <RangeFilter />
                    <DropdownFilterList value={dropdownListConfig}/>
                    <DropdownFilterList value={dropdownListConfig}/>
                    <DropdownFilterList value={dropdownListConfig}/>
                    <DropdownFilterList value={dropdownListConfig}/>
                    <DropdownFilterList value={dropdownListConfig}/>
                    <RangeFilter />
                    <RangeFilter />
                </aside>
                <div className="content">
                    <div className="sort-dropdown">
                        <FilterDropdownSort options={sortingOptions} onSelect={onSelect} selectedIndex={sortingIndex}/>
                    </div>
                    <div className="catalog">
                        {products.map(item => {
                            return <CatalogCard key={item.id} value={item}/>
                        })
                        }
                    </div>
                    <div className="see-more-section">
                        <SeeMoreButton className="button">See more</SeeMoreButton>
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    )
}
