export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProducts = (products) => {
    return {
        type: FETCH_PRODUCTS,
        products
    }
}

const fetchProductsReducer = (state=[], action) => {
    switch(action.type) {
        case "FETCH_PRODUCTS":
            return action.products;
        default:
            return state;
    }
}

export default fetchProductsReducer;