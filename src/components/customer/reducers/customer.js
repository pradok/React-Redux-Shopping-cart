import {combineReducers} from 'redux'

const discounts = (state = {}, action) => {
    switch (action.type) {
        case 'CUSTOMER_DISCOUNTS':
            return action.customerDiscounts;
        default:
            return state
    }
}

export default combineReducers({
    discounts
})
// Quantity based reduced price.
export const getReducedPrice = (state, id, qty) => {
    if (id == 'premium' && state.customer.discounts[id].perAd) {
        var productDiscount = state.customer.discounts[id].perAd;
        if (qty >= productDiscount.minQty) {
            return productDiscount.price;
        }
    }
    return false;
}