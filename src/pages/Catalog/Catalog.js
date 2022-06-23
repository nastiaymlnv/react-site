import React from "react";

import Header from "../../components/Header/Header";
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import PageLocationLine from "../../components/PageLocationLine/PageLocationLine";
import RangeFilter from "../../components/RangeFilter/RangeFilter";
import DropdownFilterList from "../../components/DropdownFilterList/DropdownFilterList";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Pagination from "../../components/Pagination/Pagination";

import "./Catalog.css";

const productsConfig = [
    {id: "id1", productName: "1Rebook Nano X1 Adventure W", line: "Crossfit", material: "Floatride Energy Foam", reviews: 12, price: 135, discount: 50},
    {id: "id2", productName: "2Rebook Nano X1 Adventure W", line: "Crossfit", material: "Floatride Energy Foam", reviews: 12, price: 135, discount: 0},
    {id: "id3", productName: "3Rebook Nano X1 Adventure W", line: "Crossfit", material: "Floatride Energy Foam", reviews: 12, price: 135, discount: 0},
    {id: "id4", productName: "4Rebook Nano X1 Adventure W", line: "Crossfit", material: "Floatride Energy Foam", reviews: 12, price: 135, discount: 50},
    {id: "id5", productName: "5Rebook Nano X1 Adventure W", line: "Crossfit", material: "Floatride Energy Foam", reviews: 12, price: 135, discount: 0},
    {id: "id6", productName: "6Rebook Nano X1 Adventure W", line: "Crossfit", material: "Floatride Energy Foam", reviews: 12, price: 135, discount: 50}
];

const dropdownListConfig = [
    {id: "1", title: "Title1", name: "1Name", quantity: 100},
    {id: "2", title: "Title1", name: "2Name", quantity: 100},
    {id: "3", title: "Title1", name: "3Name", quantity: 100},
    {id: "4", title: "Title1", name: "4Name", quantity: 100}
];

export default class Catalog extends React.Component {
    render() {
        return(
            <>
                <Header />
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
                    <div>
                        <div className="catalog">
                            {productsConfig.map(item => {
                                return <CatalogCard key={item.id} value={item}/>
                            })
                            }
                        </div>
                        <div className="see-more-section">
                            <Button className="button">See more</Button>
                            <Pagination />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
