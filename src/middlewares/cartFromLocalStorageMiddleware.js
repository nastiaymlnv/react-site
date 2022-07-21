import { ADD_TO_CART, REMOVE_FROM_CART } from "../reducers/cart";

export const cartFromLocalStorageMiddleware = store => next => action => {
    next(action);
    let cartSum = 0;

    if (action.type === ADD_TO_CART) {
        localStorage.setItem('cart', JSON.stringify(store.getState().cart));
        let addStorage = store.getState().cart;
        addStorage.map(item => {
            return cartSum += item.amount * item.price;
        });
    }

    if (action.type === REMOVE_FROM_CART) {
        let getStorage = JSON.parse(localStorage.getItem('cart'));
        getStorage.map(item => {
            return cartSum += item.amount * item.price;
        });
    }

    localStorage.setItem('cartSummary', cartSum);
}