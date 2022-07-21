import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { removeFromCart } from "../../reducers/cart";

import CartItem from "../../components/CartItem/CartItem";

import "./Cart.css";

export default function Cart() {
    const [summary, setSummary] = useState(0);

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    let cartStorage = JSON.parse(localStorage.getItem('cart'));

    const getDataFromStorage = () => {
        cart.forEach(item => {
            setSummary(sum => sum + item.price * item.amount);
        });
    }

    const deleteItemFromStorage = (id, itemPrice) => {
        const indexToDelete = cartStorage.findIndex(item => item.id === id);

        cartStorage.splice(indexToDelete, 1);
        localStorage.setItem('cart', JSON.stringify(cartStorage));

        setSummary(summary - itemPrice);

        dispatch(removeFromCart(id));
    }

    useEffect(() => {
        getDataFromStorage();
        setSummary(localStorage.getItem('cartSummary'));
    }, [])

    return <div className="cart-container content-wrapper">
        <h3 className="cart-header">
            Making the order
        </h3>
        <div className="cart-products">
            {
                cartStorage.map(item => {
                    return <CartItem key={Math.random()} value={item} deleteItemFromStorage={deleteItemFromStorage} />
                })
            }
        </div>
        <div className="total-price">
            Total price: {summary}$
        </div>
    </div>
}