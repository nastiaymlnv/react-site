import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './reducers/cart';
import fetchProductsReducer from './reducers/fetchProductsReducer';
import { cartFromLocalStorageMiddleware } from './middlewares/cartFromLocalStorageMiddleware';

const initialState = {
    products: [],
    cart: []
};

export const store = createStore(
    combineReducers({
        products: fetchProductsReducer,
        cart: cartReducer
    }),
    initialState,
    composeWithDevTools(applyMiddleware(cartFromLocalStorageMiddleware))
);