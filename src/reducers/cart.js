export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (text) => {
    return {
        type: ADD_TO_CART,
        text
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}

const cartReducer = (state=[], action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return [...state, action.text];
        case "REMOVE_FROM_CART":
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}

export default cartReducer;