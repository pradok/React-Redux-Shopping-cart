import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {reducer as formReducer} from "redux-form";

import products, * as fromProducts from "../components/products/reducers/products";
import cart, * as fromCart from "../components/cart/reducers/cart";
import customer, * as fromCustomer from "../components/customer/reducers/customer";


export const reducers = combineReducers({
    routing: routerReducer,
    form: formReducer,
    products,
    cart,
    customer
});

const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)
const getReducedPrice = (state, id, qty) => fromCustomer.getReducedPrice(state, id, qty)

export const getTotal = state => {
    console.log('getTotal state', state);
    // Iterate through all products added in cart.
    return getAddedIds(state)
        .reduce((total, id) => {
                // get the current qty from cart state
                let reducedPrice = getReducedPrice(state, id, getQuantity(state, id));
                // get discounted price or use the original price from getProduct.
                let price = reducedPrice ? reducedPrice : getProduct(state, id).price;

                return total + price * getQuantity(state, id)
            },
            0
        )
        .toFixed(2)
}


export const getCartProducts = state => {
    return getAddedIds(state).map(id => ({
        ...getProduct(state, id),
        quantity: getQuantity(state, id),
        priceReduced: getReducedPrice(state, id, getQuantity(state, id))
    }))
}
