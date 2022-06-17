import React from "react";
import Header from "../../components/Header/Header";
import CatalogCard from "../../components/CatalogCard/CatalogCard";

export default class Catalog extends React.Component {
    render() {
        return(
            <>
                <Header />
                <CatalogCard />
            </>
        )
    }
}
