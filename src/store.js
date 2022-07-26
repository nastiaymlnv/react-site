import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './reducers/cart';
import fetchProductsReducer from './reducers/fetchProductsReducer';
import { cartFromLocalStorageMiddleware } from './middlewares/cartFromLocalStorageMiddleware';

const getInitialStateCart = () => {
    const cart = localStorage.getItem('cart');

    if (cart) {
        return JSON.parse(cart);
    }
    else {
        return [];
    }
}

const initialState = {
    products: [],
    cart: getInitialStateCart()
};

export const store = createStore(
    combineReducers({
        products: fetchProductsReducer,
        cart: cartReducer
    }),
    initialState,
    composeWithDevTools(applyMiddleware(cartFromLocalStorageMiddleware))
);