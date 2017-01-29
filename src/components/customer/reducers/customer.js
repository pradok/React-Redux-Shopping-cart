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
export const getReducedPrice = (state, id, qty, originalPrice) => {
    // Return premium id discounts based on its qty rule.
    if (id == 'premium' && state.customer.discounts[id] && state.customer.discounts[id].perAd) {
        var productDiscount = state.customer.discounts[id].perAd;
        if (qty >= productDiscount.minQty) {
            return productDiscount.price;
        }
    }
    // Return standout id discounts if apply to customer.
    else if (id == 'standout' && state.customer.discounts[id] && state.customer.discounts[id].price) {
        return state.customer.discounts[id].price;
    }
    else if (id == 'classic' && state.customer.discounts[id] && state.customer.discounts[id].trigger && qty > state.customer.discounts[id].trigger - 1 && originalPrice) {
        // This will give by how many times to reduce price for classic discounts, eg. 3 for 2.
        let reducePricebyN = parseInt(qty / state.customer.discounts[id].trigger);
        if (reducePricebyN > 0) {
            return -reducePricebyN * originalPrice;
        }
    }

    return false;
}