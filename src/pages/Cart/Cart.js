import React from "react";
import { useState, useEffect } from "react";
import CartItem from "../../components/CartItem/CartItem";

import "./Cart.css";

export default function Cart() {
    const [cartItemsArr, setCartItemsArr] = useState([]);
    const [summary, setSummary] = useState(0);

    const getDataFromStorage = () => {
        let keys = Object.keys(localStorage);

        for (let key of keys) {
            let cartItem = JSON.parse(localStorage.getItem(key));
            setCartItemsArr(arr => [...arr, cartItem]);
            setSummary(sum => sum + cartItem.price * cartItem.amount);
        }
    }

    const deleteItemFromStorage = (id, itemPrice) => {
        localStorage.removeItem(id);
        let newCartItemsArr = cartItemsArr.filter(item => item.id !== id);
        setCartItemsArr(newCartItemsArr);
        setSummary(summary - itemPrice);
    }

    useEffect(() => {
        getDataFromStorage();
    }, [])

    return <div className="cart-container content-wrapper">
        <h3 className="cart-header">
            Making the order
        </h3>
        <div className="cart-products">
            {
                cartItemsArr.map(item => {
                    return <CartItem value={item} deleteItemFromStorage={deleteItemFromStorage} />
                })
            }
        </div>
        <div className="total-price">
            Total price: {summary}$
        </div>
    </div>
}