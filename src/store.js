import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './reducers/cart';
import { cartFromLocalStorageMiddleware } from './middlewares/cartFromLocalStorageMiddleware';

const initialState = {
    cart: []
};

export const store = createStore(
    combineReducers({
        cart: cartReducer
    }),
    initialState,
    composeWithDevTools(applyMiddleware(cartFromLocalStorageMiddleware))
);