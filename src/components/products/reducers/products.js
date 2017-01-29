import {combineReducers} from 'redux'

const products = (state = {}, action) => {
    switch (action.type) {
        case 'PRODUCTS_LIST':
            return action.products;
        default:
            return state
    }
}

export default combineReducers({
    products
})

export const getProduct = (state, id) => {
    return state.products.find((product) => {return product.id == id})
}