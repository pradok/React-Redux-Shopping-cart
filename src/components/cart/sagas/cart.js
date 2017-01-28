import { call, put } from "redux-saga/effects";

export function* addToCart(action) {
    console.log('addToCart action', action);
    // update the state by adding product to the cart
    yield put({
        type: 'ADD_TO_CART',
        productId: action.productId,
    });
}