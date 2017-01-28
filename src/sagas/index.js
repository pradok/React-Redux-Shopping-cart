import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { productsFetchList} from "../components/products/sagas/products";
import { addToCart} from "../components/cart/sagas/cart";

// main saga generators
export function* sagas() {
    yield [
        fork(takeLatest, 'PRODUCTS_FETCH_LIST', productsFetchList),
        fork(takeLatest, 'PRODUCT_ADD_TO_CART', addToCart),
    ];
}
