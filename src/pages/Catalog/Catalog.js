import React from "react";
import Header from "../../components/Header/Header";
import CatalogCard from "../../components/CatalogCard/CatalogCard";

const productsConfig = [
    {id: "id1", productName: "1Rebook Nano X1 Adventure W", line: "Crossfit", material: "Floatride Energy Foam", reviews: 12, price: 135, discount: 50},
    {id: "id2", productName: "2Rebook Nano X1 Adventure W", line: "Crossfit", material: "Floatride Energy Foam", reviews: 12, price: 135, discount: 0},
    {id: "id3", productName: "3Rebook Nano X1 Adventure W", line: "Crossfit", material: "Floatride Energy Foam", reviews: 12, price: 135, discount: 0},
    {id: "id4", productName: "4Rebook Nano X1 Adventure W", line: "Crossfit", material: "Floatride Energy Foam", reviews: 12, price: 135, discount: 50}
]

export default class Catalog extends React.Component {
    render() {
        return(
            <>
                <Header />
                {productsConfig.map(item => {
                    return <CatalogCard key={item.id} value={item}/>
                })
                }

            </>
        )
    }
}
