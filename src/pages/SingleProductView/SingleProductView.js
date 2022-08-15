import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import Gallery from "../../components/Gallery/Gallery";
import SingleProductCharacteristic from "../../components/SingleProductCharacteristic/SingleProductCharacteristic";
import Tab from "../../components/Tab/Tab";

import "./SingleProductView.css";

const SingleProductView = () => {
    let params = useParams();

    const [item, setItem] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
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
        } finally {
            // setIsLoading(false);
            setTimeout(()=> setIsLoading(false), 1000)
        }
    }

    if (!item) { return null; }

    return(
        <>
            <h1 className="temporary-item-instead-history">
                This is single page view of product with id: {params.id} (Temporary header instead of the history)
            </h1>
            <div className="single-product-card content-wrapper">
                <Gallery images={item.images} loading={isLoading}/>
                <div className="single-product-card_info">
                    <SingleProductCharacteristic product={item} loading={isLoading}/>
                </div>
            </div>
            <div className="tab-wrapper content-wrapper">
                <Tab tabs={item.tabs} loading={isLoading}/>
            </div>
        </>
    )
}

export default SingleProductView;