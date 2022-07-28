import { ADD_TO_CART, REMOVE_FROM_CART } from "../reducers/cart";

export const cartFromLocalStorageMiddleware = store => next => action => {

    next(action);

    let cartSum = 0;

    const calculateCartSum = () => {
        const storage = store.getState().cart;

        cartSum = storage.reduce((prevVal, curVal) => {
            return prevVal += curVal.price * curVal.amount;
        }, 0);

        localStorage.setItem('cartSummary', cartSum);

        return cartSum;
    }

    if (action.type === ADD_TO_CART) {
        localStorage.setItem('cart', JSON.stringify(store.getState().cart));
        calculateCartSum();
    }

    else if (action.type === REMOVE_FROM_CART) {
        calculateCartSum();
    }

}