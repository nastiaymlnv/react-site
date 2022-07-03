import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import Gallery from "../../components/Gallery/Gallery";
import SingleProductCharacteristic from "../../components/SingleProductCharacteristic/SingleProductCharacteristic";

import "./SingleProductView.css";

export default function SingleProductView() {
    let params = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        fetchItemData();
    }, []);

    const fetchItemData = async () => {
        try {
            const response = await fetch(`http://localhost:3001/product/${params.id}`);
            if (response.ok) {
                const result = await response.json();
                setItem(result);
            }
        }
        catch {
            alert('Failed to fetch');
        }
    }

    return(
        <>
            <h1 className="temporary-item-instead-history">
                This is single page view of product with id: {params.id} (Temporary header instead of the history)
            </h1>
            <div className="single-product-card content-wrapper">
                <Gallery product={item}/>
                <div className="single-product-card_info">
                    <SingleProductCharacteristic product={item}/>
                </div>
            </div>
        </>
    )
}