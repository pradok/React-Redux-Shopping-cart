// users reducer
export default function products(state = {}, action) {
    switch (action.type) {
        case 'PRODUCTS_LIST':
            return action.products;

        // initial state
        default:
            return state;
    }
}