export default function cart(state = {}, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log('state:', state);
            const {productId} = action;
            const newState = {
                ...state,
                [productId]: (state[productId] || 0) + 1
            };
            console.log('newState:', newState);

            return newState;

        // initial state
        default:
            return state;
    }
}