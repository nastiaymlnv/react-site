import React from "react";
import { Link } from "react-router-dom";

import {ReactComponent as DeleteIcon} from "../../assets/img/delete-icon.svg";

import "./CartItem.css";

export default function CartItem({value, deleteItemFromStorage}) {
    const {id, name, img, amount, options, price} = value;

    return <div className='cart-item'>
        <Link to={'/single-view/' + id} className="cart-item-img-wrapper link">
            <img className="cart-item-img" src={img} alt="img" />
        </Link>
        <div className="cart-cell">
            <span className="cart-cell-title">
                Product name
            </span>
            <Link to={'/single-view/' + id} className="link">
                {name}
            </Link>
        </div>
        <div className="cart-cell">
            <span className="cart-cell-title">
                Price
            </span>
            {price}$
        </div>
        <div className="cart-cell">
            <span className="cart-cell-title">
                Amount
            </span>
            {amount}
        </div>
        <div className="cart-cell">
            <span className="cart-cell-title">
                In all
            </span>
            {amount * price}$
        </div>
        <div className="delete-btn" onClick={() => deleteItemFromStorage(id, amount * price)}>
            <DeleteIcon />
        </div>
    </div>
}