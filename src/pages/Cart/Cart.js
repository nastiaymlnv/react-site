import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { removeFromCart } from "../../reducers/cart";

import CartItem from "../../components/CartItem/CartItem";

import "./Cart.css";

export default function Cart() {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    const summary = localStorage.getItem('cartSummary');

    const deleteItemFromStorage = (id) => {
        const indexToDelete = cart.findIndex(item => item.id === id);

        cart.splice(indexToDelete, 1);
        localStorage.setItem('cart', JSON.stringify(cart));

        dispatch(removeFromCart(id));
    }

    return <div className="cart-container content-wrapper">
        <h3 className="cart-header">
            Making the order
        </h3>
        <div className="cart-products">
            {
                cart.map(item => {
                    return <CartItem key={Math.random()} value={item} deleteItemFromStorage={deleteItemFromStorage} />
                })
            }
        </div>
        <div className="total-price">
            Total price: {summary}$
        </div>
    </div>
}